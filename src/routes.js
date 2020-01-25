const express = require("express");

const LoginController = require("./controllers/LoginController");
const ClienteController = require("./controllers/ClienteController");
const ServicoController = require("./controllers/ServicoController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({
    Descricao: "API app-comercio",
    Github: "https://github.com/alexsouzasilvax/api-comercio",
    Twitter: "https://twitter.com/alexsouzasilvax",
    LinkedIn: "https://www.linkedin.com/in/alexsouzasilvax/",
    rotas: [
      {
        //usuario
        Usuario: [
          {
            listaUsuarios: [
              {
                method: "GET",
                route: "/usuarios"
              }
            ],
            buscarUsuario: [
              {
                method: "POST",
                route: "/usuarios/buscar",
                body: [
                  {
                    login: "login",
                    senha: "senha"
                  }
                ]
              }
            ],
            criarUsuario: [
              {
                method: "POST",
                route: "/usuarios/criar",
                body: [
                  {
                    email: "email",
                    login: "login",
                    senha: "senha"
                  }
                ]
              }
            ],
            atualizarUsuario: [
              {
                method: "POST",
                route: "/usuarios/atualizar",
                body: [
                  {
                    _id: "_id",
                    email: "email",
                    login: "login",
                    senha: "senha"
                  }
                ]
              }
            ],
            esqueciSenha: [
              {
                method: "POST",
                route: "/usuarios/esqueciSenha",
                body: [
                  {
                    email: "email",
                    senha: "senha"
                  }
                ]
              }
            ],
            apagarUsuario: [
              {
                method: "POST",
                route: "/usuarios/apagar",
                body: [
                  {
                    _id: "_id"
                  }
                ]
              }
            ]
          }
        ],
        Cliente: [
          {
            listarClientes: [
              {
                method: "POST",
                route: "/clientes",
                body: [
                  {
                    _idUsuario: "_idUsuario"
                  }
                ]
              }
            ],
            buscarClientes: [
              {
                method: "POST",
                route: "/clientes/buscar",
                body: [
                  {
                    _id: "id"
                  }
                ]
              }
            ],
            criarCliente: [
              {
                method: "POST",
                route: "/clientes/criar",
                body: [
                  {
                    nome: "nome",
                    qtdServicos: "qtdServicos",
                    valorTotalServicos: "valorTotalServicos",
                    usuario: "_idUsuario"
                  }
                ]
              }
            ],
            atualizarCliente: [
              {
                method: "POST",
                route: "/clientes/atualizar",
                body: [
                  {
                    _id: "_id",
                    nome: "nome",
                    qtdServicos: "qtdServicos",
                    valorTotalServicos: "valorTotalServicos",
                    usuario: "usuario"
                  }
                ]
              }
            ],
            apagarCliente: [
              {
                method: "POST",
                route: "/clientes/apagar",
                body: [
                  {
                    _id: "_id"
                  }
                ]
              }
            ]
          }
        ],
        Servico: [
          {
            listarServicos: [
              {
                method: "POST",
                route: "/servicos",
                body: [
                  {
                    _idCliente: "_idCliente"
                  }
                ]
              }
            ],
            buscarServicos: [
              {
                method: "POST",
                route: "/servicos/buscar",
                body: [
                  {
                    _id: "id"
                  }
                ]
              }
            ],
            criarServico: [
              {
                method: "POST",
                route: "/servicos/criar",
                body: [
                  {
                    nome: "nome",
                    valor: "valor",
                    data: "data",
                    qtdTotalServico: "qtdTotalServico",
                    valorTotalServico: "valorTotalServico",
                    cliente: "cliente"
                  }
                ]
              }
            ],
            atualizarServico: [
              {
                method: "POST",
                route: "/servicos/atualizar",
                body: [
                  {
                    _id: "_id",
                    nome: "nome",
                    valor: "valor",
                    data: "data",
                    qtdTotalServico: "qtdTotalServico",
                    valorTotalServico: "valorTotalServico",
                    cliente: "cliente"
                  }
                ]
              }
            ],
            apagarServico: [
              {
                method: "POST",
                route: "/servicos/apagar",
                body: [
                  {
                    _id: "_id"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  });
});

routes.get("/usuarios", LoginController.index);
routes.post("/usuarios/buscar", LoginController.show);
routes.post("/usuarios/criar", LoginController.store);
routes.post("/usuarios/atualizar", LoginController.update);
routes.post("/usuarios/esqueciSenha", LoginController.esqueciSenha);
routes.post("/usuarios/apagar", LoginController.destroy);

routes.post("/clientes", ClienteController.index);
routes.post("/clientes/buscar", ClienteController.show);
routes.post("/clientes/criar", ClienteController.store);
routes.post("/clientes/atualizar", ClienteController.update);
routes.post("/clientes/apagar", ClienteController.destroy);

routes.post("/servicos", ServicoController.index);
routes.post("/servicos/buscar", ServicoController.show);
routes.post("/servicos/criar", ServicoController.store);
routes.post("/servicos/atualizar", ServicoController.update);
routes.post("/servicos/apagar", ServicoController.destroy);

routes.post("/faturamento", ServicoController.faturamento);

module.exports = routes;
