

# Cost - Gerenciamento de Projetos e Custos

**Cost** é uma aplicação que permite o gerenciamento de projetos, categorização de serviços e acompanhamento de orçamentos. O sistema permite a inclusão de projetos, adição de categorias, e controle de custos de maneira simples e eficiente. 

## Funcionalidades

- **Cadastro de Projetos**: Adicione, edite e remova projetos, atribuindo um nome e orçamento.
- **Categorização**: Selecione categorias para os projetos, como Marketing, TI, Consultoria, etc.
- **Gestão de Custos**: Acompanhe os custos totais de cada projeto, podendo incluir múltiplos serviços.
- **Exclusão de Projetos e Serviços**: Exclua projetos ou serviços facilmente.
- **Interface Simples e Intuitiva**: A interface foi projetada para ser amigável, rápida e eficiente para os usuários.

## Tecnologias Utilizadas

- **Frontend**: React.js
- **Backend**: Node.js com Express.js
- **Banco de Dados**: MongoDB (ou outro banco, dependendo da implementação)
- **Estilos**: CSS Modules para estilização modular
- **Bibliotecas de Icones**: React Icons
- **Transições**: CSS para transições suaves

## Como Rodar o Projeto

### Pré-requisitos

Certifique-se de que você tem as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/en/) (versão recomendada: LTS)
- [MongoDB](https://www.mongodb.com/try/download/community) (ou outro banco de dados, conforme sua configuração)

### Passo a Passo

1. **Clone o Repositório**

   Primeiro, clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/DanielDimas2002/cost.git
   ```

2. **Instale as Dependências**

   Navegue até o diretório do projeto e instale as dependências necessárias:

   ```bash
   cd cost
   npm install
   ```

3. **Configuração do Backend**

   Se você estiver usando o MongoDB, faça o download e instale localmente ou utilize um serviço como [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

   Configure a variável de ambiente para a conexão com o banco de dados:

   ```bash
   MONGO_URI=mongodb://localhost:27017/cost
   ```

4. **Execute o Projeto**

   Agora você pode rodar tanto o backend quanto o frontend:

   - **Inicie o Backend**:

     ```bash
     npm run server
     ```

   - **Inicie o Frontend**:

     Em um novo terminal, execute:

     ```bash
     npm run client
     ```

   O backend estará rodando em `http://localhost:5000` e o frontend em `http://localhost:3000`.

## Como Usar

1. Acesse a página inicial.
2. Utilize o menu de navegação para acessar as páginas de Projetos, Categorias e Custos.
3. Adicione novos projetos, defina um orçamento e escolha a categoria correspondente.
4. Adicione serviços aos projetos e acompanhe os custos.
5. Caso necessário, remova projetos ou serviços.

## Estrutura de Diretórios

Aqui está uma visão geral da estrutura do projeto:

```
cost/
│
├── src/
│   ├── components/          # Componentes React
│   ├── pages/               # Páginas principais
│   ├── styles/              # Arquivos de estilo (CSS Modules)
│   ├── App.js               # Arquivo principal do React
│   └── index.js             # Arquivo de entrada
│
├── backend/                 # Código do servidor Node.js
│   ├── models/              # Modelos do banco de dados
│   ├── routes/              # Rotas da API
│   └── server.js            # Arquivo de inicialização do servidor
│
├── .env                     # Variáveis de ambiente
├── package.json             # Gerenciador de pacotes do Node.js
└── README.md                # Este arquivo
```

## Contribuindo

1. Fork o repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Faça suas alterações e commit (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

