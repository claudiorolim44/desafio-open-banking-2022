var express = require('express');
var router = express.Router();
var servidorDeAutorizacao = require('../../models/servidor-de-autorizacao');


router.get('/', (req, res) => {
    servidorDeAutorizacao.obterTodosServidoresDeAutorizacao()
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
})

module.exports = router;