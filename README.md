# Sistema de Autenticação para Portfólio

Este projeto é um sistema de autenticação básico, mas robusto, desenvolvido com React, Vite e Styled Components. Ele inclui funcionalidades de registro e login, com validação de formulários, navegação entre as telas e proteção de rotas simulada. É a base ideal para integrar em um portfólio, demonstrando habilidades em desenvolvimento frontend de aplicações web.

---

## 🚀 **Tecnologias Utilizadas**

* **React:** Biblioteca JavaScript para construção de interfaces de usuário.
* **Vite:** Ferramenta de build de frontend moderna e super rápida.
* **Styled Components:** Biblioteca para estilização de componentes React com CSS-in-JS.
* **React Router DOM:** Biblioteca para gerenciamento de rotas em aplicações React.

---

## ✨ **Funcionalidades**

* **Formulário de Registro:** Permite que novos usuários criem uma conta com nome, e-mail e senha.
* **Formulário de Login:** Permite que usuários existentes acessem o sistema com e-mail e senha.
* **Validação de Formulários:** Validação em tempo real para campos de e-mail (formato), senha (comprimento mínimo) e confirmação de senha (correspondência).
* **Navegação entre Telas:** Transição suave entre as telas de Login e Registro usando React Router DOM.
* **Autenticação Simulada:** Lógica de autenticação e registro no frontend, simulando chamadas a uma API (sem necessidade de backend real por enquanto).
* **Context API para Autenticação:** Gerenciamento global do estado de autenticação (usuário logado, funções de login/logout) usando o Context API do React.
* **Proteção de Rotas:** Impede o acesso a áreas restritas (como o Dashboard) para usuários não autenticados, redirecionando-os para a tela de login.
* **Layout Corporativo:** Design limpo e profissional com componentes estilizados, incluindo um layout de duas colunas com espaço para uma imagem de fundo (direita).

---

## 🛠️ **Configuração e Execução do Projeto**

Siga os passos abaixo para clonar o repositório, instalar as dependências e executar o projeto em sua máquina local.

### **Pré-requisitos**

Certifique-se de ter o [Node.js](https://nodejs.org/en/) (versão LTS recomendada) e o [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) instalados em sua máquina.

### **Passos para Instalação**

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd sistema-autenticacao # Ou o nome da pasta do seu projeto
    ```
    *(**Nota:** Substitua `[URL_DO_SEU_REPOSITORIO]` pela URL real do seu repositório Git, se estiver usando um.)*

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Adicione a Imagem de Fundo (Opcional, mas Recomendado):**
    * Escolha uma imagem de fundo que você queira usar no layout (ex: `corporate_background.jpg`).
    * Crie uma pasta `images` dentro da pasta `public` (se ainda não existir): `public/images/`.
    * Coloque sua imagem dentro de `public/images/` (ex: `public/images/corporate_background.jpg`).
    * **Importante:** Verifique o caminho da imagem no arquivo `src/components/AuthLayout/AuthLayout.styles.js` na linha `background-image: url('/images/backgroundSA.jpeg');` e certifique-se de que ele corresponda ao nome e localização da sua imagem (ex: `url('/images/corporate_background.jpg')`).

### **Executando a Aplicação**

Para iniciar o servidor de desenvolvimento e ver a aplicação em seu navegador:

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em http://localhost:5173 (ou outra porta indicada pelo Vite).

## ⚙️ Estrutura de Pastas

```
sistema-autenticacao/
├── public/                 # Ativos estáticos (imagens, favicons, etc.)
│   └── images/
│       └── backgroundSA.jpeg # Exemplo de imagem de fundo
├── src/
│   ├── components/         # Componentes reutilizáveis de UI
│   │   ├── AuthLayout/
│   │   │   ├── AuthLayout.jsx
│   │   │   └── AuthLayout.styles.js
│   │   ├── LoginForm/
│   │   │   ├── LoginForm.jsx
│   │   │   └── LoginForm.styles.js
│   │   ├── RegisterForm/
│   │   │   ├── RegisterForm.jsx
│   │   │   └── RegisterForm.styles.js
│   │   └── ProtectedRoute.jsx  # Componente para proteger rotas
│   ├── context/            # Contextos globais da aplicação
│   │   └── AuthContext.jsx     # Contexto de autenticação
│   ├── pages/              # Páginas principais da aplicação
│   │   └── Dashboard.jsx       # Área protegida pós-login
│   ├── services/           # Funções de serviços (simulação de API)
│   │   └── authService.js      # Serviço de autenticação falso
│   ├── App.jsx             # Componente raiz da aplicação e configuração de rotas
│   ├── main.jsx            # Ponto de entrada do React
│   └── index.css           # Estilos globais (se houver)
├── .gitignore              # Arquivos/pastas a serem ignorados pelo Git
├── package.json            # Metadados do projeto e dependências
├── vite.config.js          # Configuração do Vite
└── README.md               # Este arquivo!
```

## 🔑 Credenciais de Teste (Simuladas)

1. Acesse /register.

2. Crie um novo usuário (ex: Nome: Teste Usuário, E-mail: teste@email.com, Senha: 123456).

3. Após o registro, você será redirecionado para /login.

4. Use as mesmas credenciais para fazer login.

-- Desenvolvido por Patric Augusto