const express = require("express");
const database = require("./database/index");

const politicaRoutes = require("./routes/politicaDeEstoque.routes");
const relatorioRoutes = require("./routes/relatorios.routes");

const PORT = 3000;

const app = express();
app.use(express.json());

app.use("/relatorios", relatorioRoutes);
app.use("/politicas-de-estoque", politicaRoutes);

app.listen(PORT, async () => {
  await database.sync();
  console.log("Servidor rodando na porta " + PORT);
});
