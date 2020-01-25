const express = require("express");

const LoginController = require("./controllers/LoginController");
const ClienteController = require("./controllers/ClienteController");
const ServicoController = require("./controllers/ServicoController");

const routes = express.Router();

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
