const PoliticaDeEstoque = require("../database/politicaDeEstoque");


const listPoliticaService = async () => {
    const politicas = await PoliticaDeEstoque.findAll();
    return politicas;
};


module.exports = listPoliticaService;
