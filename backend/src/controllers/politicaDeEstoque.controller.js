const listPoliticaService = require("../services/listPoliticas.service");

const listPoliticasController = async (req, res) => {
  try {
    const politicas = await listPoliticaService();

    return res.json(politicas);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = listPoliticasController;
