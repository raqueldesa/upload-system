const { Router } = require("express");

const listRelatorioController = require("../controllers/listRelatorio.controller");
const createRelatorioController = require("../controllers/createRelatorio.controller");

const relatorioRoutes = Router();

relatorioRoutes.post("", createRelatorioController);
relatorioRoutes.get("", listRelatorioController);

module.exports = relatorioRoutes;
