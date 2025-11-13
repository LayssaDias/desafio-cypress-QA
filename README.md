# Desafio Cypress QA - Automação de Testes Web

Este repositório contém a solução para o desafio prático de Testes Automatizados Web, utilizando a ferramenta **Cypress** e o site de e-commerce `lojaebac.ebaconline.art.br`.

O projeto está estruturado utilizando o **Page Object Model (POM)** para garantir alta manutenibilidade e reutilização de código.

## 🛠️ Requisitos e Configuração

Para executar este projeto, você precisa ter o Node.js instalado em sua máquina.

### ⚙️ 1. Como Instalar as Dependências

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/LayssaDias/desafio-cypress-QA](https://github.com/LayssaDias/desafio-cypress-QA)
    cd desafio-cypress-QA
    ```

2.  **Instale as dependências do projeto** (Cypress e outras dependências, se houver):
    ```bash
    npm install
    # ou
    yarn install
    ```

### 2. Como Rodar os Testes

Após a instalação das dependências, você pode executar os testes de duas maneiras:

#### Modo Interativo (Interface Gráfica)

Este modo é ideal para desenvolvimento, debug e visualização passo a passo:

bash
npx cypress open


Selecione o navegador e o arquivo de teste login.cy.js (ou similar) para iniciar a execução.Modo Headless (Linha de Comando)Este modo é ideal para execução em ambientes de CI/CD ou para relatórios rápidos. Os resultados serão exibidos no terminal:Bashnpx cypress run


##### 3. Cenários Automatizados e Justificativa da Escolha Funcionalidade Escolhida: 

Funcionalidade Escolhida: Login (Autenticação)

A funcionalidade selecionada para automação foi o Login de usuários, por ser uma das partes mais críticas e utilizadas do e-commerce, sendo o ponto de entrada essencial para qualquer usuário. Além disso, o processo de login pode ser facilmente reutilizado em outros fluxos.

