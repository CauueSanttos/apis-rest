# apis-rest

Exemplos de Api's Rest com NodeJS 

• Iniciando o projeto.
 - Ter instalado node.js / npm / yarn.
 - Com tudo instalado, baixar o repositório.
 - Abrir a pasta do repositório via bash (cmd / PowerShell/ gitBash).
 - Usar o comando "yarn" para que baixe todas as dependências do projeto.
 - Usar o comando "yarn start" para iniciar a aplicação.
 - Banco usado na aplicação MongoDB.
 - Framework utilizado: Express.
 - A URL do projeto é "http://localhost:3333/"
 
• Rotas:
- API Clientes

* GET - http://localhost:3333/clientes
  - Retorna todos clientes.
  
      - http://localhost:3333/cliente/:id
  - Retorna um cliente específico.
  
* POST - http://localhost:3333/cliente
  - Necessário mandar junto na requisição o body, contendo a seguinte estrutura:
      {
        "nome": "Nome"
        "idade": 0, 
        "profissao": "Profissão"
      }
  - Com isso o cliente será cadastrado no banco e será retornado o JSON do usuário.

* PUT - http://localhost:3333/cliente/:id
  - Necessário mandar na url o ID gerado no banco.
  - Necessário mandar o body para atualizar o cliente o json contendo a seguinte estrutura: 
      {
        "idade": 0, 
        "profissao": "Profissão"
      }

* DELETE - http://localhost:3333/cliente/:id
  - Necessário mandar na url o ID gerado no banco.
  - Terá um retorno que o cliente foi excluído.
  
  - API Veículos
  
  * GET - http://localhost:3333/veiculos
  - Retorna todos veículos.
  
      - http://localhost:3333/veiculo/:id
  - Retorna um veículo específico.
  
* POST - http://localhost:3333/veiculo
  - Necessário mandar junto na requisição o body, contendo a seguinte estrutura:
      {
        "marca": "Marca"
        "cor": 0, 
        "modelo": "Modelo",
        "portas": 0,
        "capacidade_pessoas": 0,
        "ano_fabricacao": 0
      }
  - Com isso o veículo será cadastrado no banco e será retornado o JSON.

* PUT - http://localhost:3333/veiculo/:id
  - Necessário mandar na url o ID gerado no banco.
  - Necessário mandar o body para atualizar o veículo o json contendo a seguinte estrutura: 
      {
        "portas": 0,
        "capacidade_pessoas": 0,
        "ano_fabricacao": 0
      }

* DELETE - http://localhost:3333/veiculo/:id
  - Necessário mandar na url o ID gerado no banco.
  - Terá um retorno que o veículo foi excluído.
