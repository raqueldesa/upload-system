const PoliticaDeEstoque = require("../database/politicaDeEstoque");
const Relatorio = require("../database/relatorios");

const idPolitica = 1; // selecionada pelo usuario talvez?

const listRelatoriosService = async () => {
  const relatorios = await Relatorio.findAll();
  const politica = await PoliticaDeEstoque.findByPk(idPolitica);

  const valorOtimo = politica.dataValues.otimo;
  const valorCritico = politica.dataValues.critico;

  relatorios.forEach(async (relatorio) => {
    if (relatorio.dataValues.volume !== null) {
      if (relatorio.dataValues.volume > valorOtimo) {
        relatorio.status = "Ótimo";
        await relatorio.save();
        return relatorio;
      } else if (relatorio.dataValues.volume < valorCritico) {
        relatorio.status = "Critico";
        await relatorio.save();
        return relatorio;
      } else {
        relatorio.status = "Bom";
        await relatorio.save();
        return relatorio;
      }
    } else {
      relatorio.status = "Nao informado";
      await relatorio.save();
      return relatorio;
    }
  });
  return relatorios;
};

module.exports = listRelatoriosService;
