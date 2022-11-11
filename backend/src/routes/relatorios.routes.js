const { Router } = require("express");
const listRelatorioController = require("../controllers/relatorio.controller");

const relatorioRoutes = Router();

relatorioRoutes.get("", listRelatorioController);

module.exports = relatorioRoutes;
