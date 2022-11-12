const Relatorio = require("../database/relatorios");

const createRelatorioService = async (relatoriosData)=> {

     const relatorios = await relatoriosData.map(async(relatorio) => {
        
        const novoRelatorio = await Relatorio.create({
            data: relatorio.data,
            open: relatorio.open,
            high: relatorio.high,
            low: relatorio.low,
            close: relatorio.close,
            volume: relatorio.volume,
          });
          
          return novoRelatorio;
    });
    

  return relatorios;
};

module.exports =  createRelatorioService;