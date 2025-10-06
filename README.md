
# Visão Geral do Projeto

Link para a documentação completa no Notion:  
[Visão geral do projeto](https://www.notion.so/Vis-o-geral-do-projeto-1f2494a5cc0880a68abfe0878e5b0dd1?source=copy_link)

Link do ambiente:
https://segunda-entrega-latest.onrender.com

## Como iniciar o projeto

1. Configure as variáveis de ambiente seguindo o arquivo `.env.example`.
2. Suba o banco local com Docker:
   ```bash
   docker-compose up -d
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Execute o projeto:
   - Para ambiente de desenvolvimento:
     ```bash
     npm run start:dev
     ```
   - Para ambiente de produção:
     ```bash
     npm run start
     ```
