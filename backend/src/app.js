const express = require("express");
const database = require("./database/index");

const politicaRoutes = require("./routes/politicaDeEstoque.routes");
const relatorioRoutes = require("./routes/relatorios.routes");

const cors = require("cors");

const PORT = 3001;

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
  app.use(cors());
  next();
});

app.use("/relatorios", relatorioRoutes);
app.use("/politicas-de-estoque", politicaRoutes);

app.listen(PORT, async () => {
  await database.sync();
  console.log("Servidor rodando na porta " + PORT);
});
