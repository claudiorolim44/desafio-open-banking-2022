// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Mensagem de teste da API" });
});

app.listen(PORT, () => {
  console.log(`Servidor ativo na porta ${PORT}`);
});