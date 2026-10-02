# Trabalho-Faculdade
trabalho gerado com ajuda de IA para obtenção de nota 
# 🚀 Experiência Prática III - Desenvolvimento Front-End

Projeto desenvolvido como parte da atividade acadêmica de **Experiência Prática III de Desenvolvimento Front-End**, com foco na aplicação dos fundamentos de JavaScript e na construção de uma aplicação web interativa e modular.

## 📌 Sobre o projeto

A aplicação consiste em um site desenvolvido com HTML, CSS e JavaScript puro (Vanilla JavaScript), utilizando o conceito de **Single Page Application (SPA)** para realizar a navegação entre diferentes páginas sem a necessidade de recarregar todo o documento.

O projeto foi desenvolvido com o objetivo de praticar manipulação do DOM, gerenciamento de eventos, validação de formulários, armazenamento local de dados e integração com bibliotecas externas.

## 🛠️ Tecnologias utilizadas

* **HTML5:** estruturação do conteúdo.
* **CSS3:** estilização e organização visual da interface.
* **JavaScript (ES6+):** lógica da aplicação, interatividade e manipulação do DOM.
* **ES Modules:** organização do código por meio de `import` e `export`.
* **LocalStorage:** persistência dos dados do usuário no navegador.
* **SweetAlert2:** exibição de mensagens interativas.
* **Live Server:** execução e testes da aplicação durante o desenvolvimento.

## ✨ Funcionalidades

* Navegação SPA entre as páginas Início, Cadastro e Sobre.
* Renderização dinâmica de conteúdo utilizando templates JavaScript.
* Formulário de cadastro de usuários.
* Validação dos campos de nome, e-mail e senha.
* Mensagens de erro e indicação visual de campos inválidos.
* Funcionalidade para mostrar e ocultar a senha.
* Armazenamento e recuperação de nome e e-mail utilizando LocalStorage.
* Notificação de sucesso com a biblioteca SweetAlert2.
* Organização do código em módulos independentes.

## 📂 Estrutura do projeto

```text
experiencia-pratica-3/
├── css/
│   └── style.css
├── html/
│   └── index.html
├── imagens/
└── js/
    ├── app.js
    ├── components.js
    ├── router.js
    ├── storage.js
    └── validation.js
```

## ▶️ Como executar o projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/jhowdh/experiencia-pratica-3.git
   ```

2. Abra a pasta do projeto no Visual Studio Code.

3. Instale a extensão **Live Server**, caso ainda não esteja instalada.

4. No Explorer do VS Code, abra a pasta `html` e clique com o botão direito no arquivo `index.html`.

5. Selecione **Open with Live Server**.

6. A aplicação será aberta no navegador.

**Observação:** a biblioteca SweetAlert2 é carregada por CDN, portanto é necessária uma conexão com a internet para utilizar suas notificações.

## 🧪 Testes realizados

Durante o desenvolvimento, foram realizados testes para verificar:

* A navegação entre as páginas da aplicação.
* O funcionamento da validação do formulário.
* A apresentação de mensagens de erro.
* A exibição da notificação de sucesso.
* O funcionamento do botão de mostrar e ocultar senha.
* A persistência do nome e do e-mail após atualizar a página.
* O carregamento correto dos arquivos e módulos JavaScript.

## 🔐 Considerações sobre os dados

Os dados persistidos no LocalStorage são o nome e o e-mail do usuário. A senha não é armazenada.

Como se trata de um projeto acadêmico de front-end, a aplicação não possui integração com servidor ou banco de dados externo.

## 🎯 Aprendizados

O desenvolvimento deste projeto permitiu aprofundar conhecimentos em JavaScript, especialmente na manipulação do DOM, no uso de eventos, na validação de formulários e na persistência de dados no navegador.

Também foram praticados os conceitos de modularização, separação de responsabilidades, depuração de erros e integração de bibliotecas externas, contribuindo para uma melhor compreensão do processo de desenvolvimento front-end.

## 👨‍💻 Desenvolvido por

**Jhonathan Ribeiro**

* 💼 LinkedIn: [linkedin.com/in/jhowdh](https://www.linkedin.com/in/jhowdh/)
* 🐙 GitHub: [github.com/jhowdh](https://github.com/jhowdh)

---

Projeto acadêmico desenvolvido para fins educacionais e de aprendizado em desenvolvimento Front-End.
