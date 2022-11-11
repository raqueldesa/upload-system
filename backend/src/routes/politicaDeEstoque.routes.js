const { Router } = require("express");
const listPoliticasController = require("../controllers/politicaDeEstoque.controller");

const politicaRoutes = Router();

politicaRoutes.get("", listPoliticasController);

module.exports = politicaRoutes;
