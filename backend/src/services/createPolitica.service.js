const PoliticaDeEstoque = require("../database/politicaDeEstoque");

const createPoliticaService = async (politicaData) => {
  const novaPolitica = await PoliticaDeEstoque.create({
    otimo: politicaData.otimo,
    bom_min: politicaData.bom_min,
    bom_max: politicaData.bom_max,
    critico: politicaData.critico,
  });

  return novaPolitica;
};

module.exports = createPoliticaService;
