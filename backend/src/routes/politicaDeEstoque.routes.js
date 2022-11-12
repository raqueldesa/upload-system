const { Router } = require("express");
const listPoliticasController = require("../controllers/listPolitica.controller");
const createPoliticasController = require("../controllers/createPolitica.controller");

const politicaRoutes = Router();

politicaRoutes.post("", createPoliticasController);
politicaRoutes.get("", listPoliticasController);

module.exports = politicaRoutes;
