const Sequelize = require("sequelize");
const database = require("./index");

const PoliticaDeEstoque = database.define("politica_de_estoque", {
  otimo: {
    type: Sequelize.INTEGER,
  },
  bom_min: {
    type: Sequelize.INTEGER,
  },
  bom_max: {
    type: Sequelize.INTEGER,
  },
  critico: {
    type: Sequelize.INTEGER,
  },
});

module.exports = PoliticaDeEstoque;
