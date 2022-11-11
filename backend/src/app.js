const express = require("express");
const database = require("./database/index");

const PoliticaDeEstoque = require("./database/politicaDeEstoque");
const Relatorio = require("./database/relatorios");

const politicaRoutes = require("./routes/politicaDeEstoque.routes");
const relatorioRoutes = require("./routes/relatorios.routes");

const PORT = 3000;

const popularTabelaRelatorio = async () => {
  const novoRelatorio = Relatorio.create({
    data: "2022-03-17",
    open: 54.19,
    high: 54.02,
    low: 54.02,
    close: 54.6,
    volume: 129.189,
  });
  console.log(novoRelatorio)
};

const popularTabelaPolitica = async () => {
  const novoPolitica = PoliticaDeEstoque.create({
    otimo: 140,
    bom_min: 100,
    bom_max: 140,
    critico: 100
  });
  console.log(novoPolitica)
};

const app = express();
app.use(express.json());

app.use("/relatorios", relatorioRoutes);
app.use("/politicas-de-estoque", politicaRoutes);

app.get("/", (request, response) => {
  return response.send("Teste primeiro commit");
});

app.listen(PORT, async () => {
  await database.sync();
  // popularTabela();
  // popularTabelaPolitica();
  console.log("Servidor rodando na porta " + PORT);
});
