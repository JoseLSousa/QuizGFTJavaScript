const questionsContainer = document.querySelector('.questionsContainer');
const questionTitle = document.querySelector('.questionTitle');
const nextButton = document.querySelector('.nextBtn');
const startButton = document.querySelector('.btnStart');
const timerElement = document.querySelector('.timerElement');
const progressContainer = document.querySelector('.progressContainer');

let questions = [];
let questionIndex = 0;
let score = 0;
let timeRemaining = 15;
let timer;

function setTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timerElement.textContent = `00:${String(timeRemaining).padStart(2, '0')}`;
        timeRemaining--;
        if (timeRemaining < 1) {
            questionIndex++;
            timeRemaining = 15;
            questionsContainer.innerHTML = '';
            displayQuestion(questionIndex);
        }
    }, 1000);
}

function loadQuestions() {
    fetch('scritps/questions.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar arquivo Json: ', response.status);
            }
            return response.json();
        })
        .then(data => {
            questions = data;

        })
        .catch(error => {
            console.log('Erro na requisição: ', error);
        })
}

nextButton.addEventListener('click', () => {
    timeRemaining = 15;
    questionIndex++;
    questionTitle.innerHTML = '';
    questionsContainer.innerHTML = '';
    setTimer();
    displayQuestion(questionIndex);
})

startButton.addEventListener('click', () => {
    toggleItens();
    displayQuestion(questionIndex);
})

function toggleItens() {
    const descriptionContainer = document.querySelector('.descriptionContainer');
    const quizImage = document.getElementById('imgBootcamp');
    timerElement.classList.remove('hide');
    startButton.classList.add('hide');
    descriptionContainer.classList.add('hide');
    quizImage.classList.add('hide');
    nextButton.classList.remove('hide')
}

function displayQuestion(questionIndex) {
    while (questionIndex < questions.length) {
        progressContainer.innerHTML = `<div class=" progress col-10" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="${questions.length}">
                                    <div class=" progress-bar" style="width: ${(((questionIndex + 1) / questions.length)) * 100}%"></div></div>
                                    <div class=" questionNumber col-2 fs-5">${questionIndex + 1}/${questions.length}</div>`;
        questionTitle.innerHTML = `${questions[questionIndex].question}`;
        questions[questionIndex].answers.forEach((answer, i) => {
            questionsContainer.innerHTML += `<button id="${i}" class="answerButton btn btn-outline-primary mb-2" onclick="verifyAnswer(  ${i})">${answer.text}</button>`
        })
        setTimer();
        return;
    }
    clearInterval(timer);
    console.log("Fim")
    questionTitle.innerHTML = '';
    questionsContainer.innerHTML = '';
    showScore();

}

function verifyAnswer(id) {
    selectedAnswer = document.getElementById(id);
    if (questions[questionIndex].answers[id].correct) {
        selectedAnswer.style.backgroundColor = 'green'
        selectedAnswer.style.border = "1px solid green";
        selectedAnswer.style.color = 'white'
        questionIndex++;
        timeRemaining = 15;
        score++;
        setTimeout(() => {
            questionsContainer.innerHTML = '';
            displayQuestion(questionIndex);
            setTimer();
        }, 1000);
    } else {
        selectedAnswer.style.backgroundColor = 'red'
        selectedAnswer.style.color = 'white'
        selectedAnswer.style.border = "1px solid red";
        questionIndex++;
        timeRemaining = 15;

        setTimeout(() => {
            questionsContainer.innerHTML = '';
            displayQuestion(questionIndex);
            setTimer();
        }, 1000);
    }
}

function showScore() {
    timerElement.classList.add('hide');
    nextButton.classList.add('hide')
    if (score >= ((questions.length - 1) * 0.7)) {
        questionTitle.innerHTML = '';
        questionsContainer.innerHTML = `<h2>Parabéns! 🥇</h2>
        <p class="fs-4">Incrível, você acertou ${score} perguntas!</p>`;
    } else {
        questionTitle.innerHTML = '';
        questionsContainer.innerHTML = `<h2>Que pena!</h2>
        <p>Você acertou ${score} perguntas, vamos continuar estudando para aumentar essa pontuação?</p>`;
    }
    clearInterval(timer);
}

loadQuestions();
