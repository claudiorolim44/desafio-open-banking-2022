// server/src/index.js

const express = require("express");

var participantesRouter = require('./routes/api/participantes');
var servidoresDeAutorizacaoRouter = require('./routes/api/servidores-de-autorizacao');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req, res) => {res.json({ message: "Mensagem teste da API" })});
app.use('/api/participantes', participantesRouter);
app.use('/api/servidores-de-autorizacao', servidoresDeAutorizacaoRouter);

app.listen(PORT, () => {
  console.log(`Servidor ativo na porta ${PORT}`);
});