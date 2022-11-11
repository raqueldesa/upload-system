import express from "express";

const PORT = 3000;

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  return response.send("Teste primeiro commit");
});

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
