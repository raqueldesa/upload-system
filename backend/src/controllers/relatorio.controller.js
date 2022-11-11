const listRelatoriosService = require("../services/listRelatorios.service");

const listRelatorioController = async (req, res) => {
  try {
    const relatorios = await listRelatoriosService();

    return res.json(relatorios);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = listRelatorioController;
