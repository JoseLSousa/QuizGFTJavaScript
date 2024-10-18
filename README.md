
# Quiz JavaScript

Este projeto é um quiz interativo desenvolvido em JavaScript. O quiz carrega perguntas de um arquivo JSON, exibe uma pergunta por vez e permite ao usuário responder dentro de um limite de tempo. A pontuação é calculada com base nas respostas corretas, e o usuário recebe feedback no final do quiz.

## Funcionalidades

- **Carregamento dinâmico de perguntas**: As perguntas são carregadas de um arquivo JSON.
- **Sistema de tempo**: Cada pergunta tem um limite de 15 segundos para ser respondida.
- **Progressão automática**: O quiz avança automaticamente para a próxima pergunta, caso o tempo se esgote.
- **Pontuação**: O resultado final é apresentado com base na quantidade de respostas corretas.
- **Feedback visual**: As respostas corretas e incorretas são destacadas em cores diferentes.
- **Interface limpa e interativa**: A interface é atualizada dinamicamente para mostrar as perguntas e o progresso.

## Tecnologias Utilizadas

- **HTML5**: Para a estrutura do layout.
- **CSS3**: Para a estilização.
- **JavaScript**: Para a lógica do quiz.
- **Bootstrap**: Para componentes de interface responsivos.

## Como Executar o Projeto

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/SeuUsuario/QuizGFTJavaScript.git
   ```

2. **Abra o projeto no seu editor de código preferido**.

3. **Certifique-se de que o arquivo `questions.json` está presente no diretório `scripts`**, contendo perguntas no formato adequado.

4. **Abra o arquivo `index.html` no navegador** para iniciar o quiz.

## Estrutura do Projeto

- **index.html**: Arquivo principal com a estrutura HTML.
- **styles/**: Contém os arquivos CSS para estilização.
- **scripts/**: Contém os scripts JavaScript, incluindo o `questions.json` para carregar as perguntas.

## Como Personalizar as Perguntas

Para adicionar ou modificar as perguntas, edite o arquivo `scripts/questions.json`. O formato esperado é:

```json
[
    {
        "question": "Qual é a capital da França?",
        "answers": [
            { "text": "Paris", "correct": true },
            { "text": "Londres", "correct": false },
            { "text": "Madri", "correct": false },
            { "text": "Roma", "correct": false }
        ]
    },
    {
        "question": "Qual é a linguagem de programação deste projeto?",
        "answers": [
            { "text": "Python", "correct": false },
            { "text": "JavaScript", "correct": true },
            { "text": "C#", "correct": false },
            { "text": "Java", "correct": false }
        ]
    }
]
```

## Contribuição

Sinta-se à vontade para contribuir com o projeto, enviando pull requests ou reportando problemas.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

## Agradecimentos

Agradecemos a todos que contribuíram para o desenvolvimento deste projeto!
