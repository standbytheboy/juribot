# JuriBot - Acesso à Justiça com Inteligência Artificial

JuriBot é uma aplicação web full-stack moderna, projetada para democratizar o acesso a informações jurídicas. Utilizando o poder de modelos de linguagem avançados, o JuriBot oferece orientações claras e acessíveis, ajudando pessoas a entenderem seus direitos de forma objetiva e conversacional.

O projeto foi construído com uma arquitetura monorepo, separando o frontend (React) do backend (Node.js), e está totalmente configurado para deploy na Vercel.

## ✨ Funcionalidades Principais

  * **Interface de Chat Inteligente:** Interaja com uma IA treinada para fornecer informações jurídicas em um formato de conversa.
  * **Autenticação de Usuários:** Sistema completo de cadastro e login para proteger o acesso ao chat e personalizar a experiência.
  * **Landing Page Detalhada:** Uma página inicial completa com seções informativas sobre o projeto, incluindo "Como Funciona", "Sobre" e "Depoimentos".
  * **Design Responsivo:** A interface se adapta perfeitamente a diferentes tamanhos de tela, de desktops a dispositivos móveis, graças ao Tailwind CSS.
  * **API Segura:** O backend protege a rota do chat, garantindo que apenas usuários autenticados possam interagir com a IA.

## 🚀 Tecnologias Utilizadas

O projeto é dividido em duas partes principais, cada uma com seu próprio conjunto de tecnologias:

**Frontend (Client-side):**

  * **React:** Para a construção da interface de usuário reativa e componentizada.
  * **Vite:** Como ferramenta de build e servidor de desenvolvimento ultrarrápido.
  * **React Router DOM:** Para gerenciar a navegação e as rotas da aplicação (SPA).
  * **Tailwind CSS:** Para estilização rápida e consistente com uma abordagem utility-first.
  * **React Markdown:** Para formatar e renderizar as respostas da IA, que vêm em formato Markdown.

**Backend (Server-side):**

  * **Node.js:** Como ambiente de execução do servidor.
  * **Express.js:** Para a criação do servidor e o gerenciamento das rotas da API.
  * **MongoDB & Mongoose:** Como banco de dados NoSQL para armazenar os dados dos usuários, com o Mongoose para modelagem dos dados.
  * **JSON Web Token (JWT):** Para a criação de tokens de acesso seguros após o login do usuário.
  * **Google Cloud Vertex AI:** Para a integração com os modelos de linguagem generativa do Google (Gemini).

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

  * [Node.js](https://nodejs.org/en/) (versão 18 ou superior recomendada)
  * [Git](https://git-scm.com)
  * Uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) para o banco de dados.
  * Uma conta no [Google Cloud](https://console.cloud.google.com/) com a API Vertex AI ativada e um arquivo de credenciais de conta de serviço.

## ⚙️ Rodando o Projeto Localmente

Siga os passos abaixo para configurar e rodar o JuriBot em seu ambiente de desenvolvimento.

**1. Clone o Repositório**

```bash
git clone https://github.com/standytheboy/juribot
cd juribot
```

**2. Configure o Backend (`/api`)**

```bash
# Navegue até a pasta da API
cd api

# Instale as dependências
npm install

# Crie o arquivo .env para as variáveis de ambiente
touch .env
```

Abra o arquivo `/api/.env` e adicione as seguintes chaves:

```
MONGO_URI=sua_string_de_conexao_do_mongodb_atlas
JWT_SECRET=crie_um_segredo_longo_e_aleatorio
COHERE_API_KEY=chave_de_conexao_da_api_de_inteligencia_artificial
```


**3. Configure o Frontend (`/frontend`)**

```bash
# Volte para a raiz e navegue até a pasta do frontend
cd ../frontend

# Instale as dependências
npm install
```

**4. Inicie os Servidores**
Você precisará de **dois terminais** abertos.

  * **No primeiro terminal (para o backend):**

    ```bash
    cd api
    npm start
    ```

    O servidor da API deverá iniciar em `http://localhost:3001`.

  * **No segundo terminal (para o frontend):**

    ```bash
    cd frontend
    npm run dev
    ```

    A aplicação React será iniciada em `http://localhost:5173`. Abra este endereço no seu navegador para usar o JuriBot.

-----
