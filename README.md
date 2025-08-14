🎮 Loja de Games - Backend
Backend desenvolvido em NestJS para gerenciamento de uma loja de games, com sistema completo de CRUD para produtos e categorias.
🚀 Tecnologias Utilizadas

NestJS - Framework Node.js para aplicações escaláveis
TypeScript - Linguagem de programação tipada
TypeORM - ORM para gerenciamento do banco de dados
MySQL - Sistema de gerenciamento de banco de dados
Class Validator - Validação de dados
Class Transformer - Transformação de objetos

📋 Funcionalidades
📂 Categorias

✅ Listar todas as categorias
✅ Buscar categoria por ID
✅ Buscar categoria por nome
✅ Criar nova categoria
✅ Atualizar categoria existente
✅ Deletar categoria

🎯 Produtos

✅ Listar todos os produtos
✅ Buscar produto por ID
✅ Buscar produto por nome
✅ Criar novo produto
✅ Atualizar produto existente
✅ Deletar produto

🔗 Relacionamentos

One-to-Many entre Categoria e Produto
Cada categoria pode ter múltiplos produtos
Cada produto pertence a uma categoria

🛠️ Instalação e Configuração
Pré-requisitos

Node.js (versão 16 ou superior)
MySQL
npm ou yarn

1. Clone o repositório
bashgit clone https://github.com/VanessaTargino/backend_games.git
cd backend_games
2. Instale as dependências
bashnpm install
3. Configure o banco de dados
Crie um banco MySQL:
sqlCREATE DATABASE db_loja_games;
4. Configure as variáveis de ambiente
Edite o arquivo src/app.module.ts com suas credenciais do MySQL:
typescriptTypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'seu_usuario',
  password: 'sua_senha',
  database: 'db_loja_games',
  // ...
})
5. Execute a aplicação
bash# Desenvolvimento
npm run start:dev

# Produção
npm run build
npm run start:prod
A aplicação estará rodando em http://localhost:4000

---

📡 Endpoints da API
📂 Categorias (/categorias)
Método - Endpoint - Descrição 
GET/categorias Listar todas as categorias
GET/categorias/:id Buscar categoria por ID
GET/categorias/nome/:nome Buscar categoria por nome
POST/categorias Criar nova categoria
PUT/categorias Atualizar categoria
DELETE/categorias/:id Deletar categoria

---

🎯 Produtos (/produtos)
Método - Endpoint - Descrição
GET/produtos Listar todos os produtos
GET/produtos/:id Buscar produto por ID
GET/produtos/nome/:nome Buscar produto por nome
POST/produtos Criar novo produto
PUT/produtos Atualizar produto
DELETE/produtos/:id Deletar produto

---

📝 Exemplos de Uso
Criar Categoria
jsonPOST /categorias
{
  "nome": "RPG",
  "descricao": "Jogos de interpretação de personagem"
}
Criar Produto
jsonPOST /produtos
{
  "nome": "The Witcher 3",
  "descricao": "RPG de mundo aberto épico",
  "preco": 199.99,
  "foto": "https://example.com/witcher3.jpg",
  "console": "PC, PS4, Xbox One, Nintendo Switch",
  "estoque": 50,
  "categoria": {
    "id": 1
  }
}
Atualizar Produto
jsonPUT /produtos
{
  "id": 1,
  "nome": "The Witcher 3 - Game of the Year Edition",
  "descricao": "RPG completo com todas as DLCs",
  "preco": 149.99,
  "foto": "https://example.com/witcher3-goty.jpg",
  "console": "PC, PS4, Xbox One, Nintendo Switch",
  "estoque": 30,
  "categoria": {
    "id": 1
  }
}
🗂️ Estrutura do Projeto
src/
├── app.module.ts          # Módulo principal da aplicação
├── main.ts               # Arquivo de inicialização
├── categoria/
│   ├── entities/
│   │   └── categoria.entity.ts    # Entidade da categoria
│   ├── categoria.controller.ts    # Controller da categoria
│   ├── categoria.service.ts       # Service da categoria
│   └── categoria.module.ts        # Módulo da categoria
└── produto/
    ├── entities/
    │   └── produto.entity.ts      # Entidade do produto
    ├── produto.controller.ts      # Controller do produto
    ├── produto.service.ts         # Service do produto
    └── produto.module.ts          # Módulo do produto
🧪 Testando a API
Você pode testar a API usando ferramentas como:

Insomnia (recomendado)
Postman
Thunder Client (VS Code)
cURL

Importe os endpoints listados acima e teste todas as funcionalidades CRUD.

---

👩‍💻 Desenvolvido por
Vanessa Targino
