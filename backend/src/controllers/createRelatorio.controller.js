const createRelatorioService = require("../services/createRelatorio.service");

const createRelatorioController = async (req, res) => {
  try {
    const relatorioData = req.body;
    await createRelatorioService(relatorioData);

    return res.status(201).json({ message: "Relatorios Salvos no Banco!" });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = createRelatorioController;
