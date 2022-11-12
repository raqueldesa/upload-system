const createPoliticaService = require("../services/createPolitica.service");


const createPoliticaController = async (req, res) => {
  try {
    const politicaData = req.body;
    const politica = await createPoliticaService(politicaData);

    return res.status(201).json(politica);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = createPoliticaController;
