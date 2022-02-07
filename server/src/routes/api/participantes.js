var express = require('express');
var router = express.Router();
const axios = require('axios');
const participantesUrl = 
    'https://data.directory.openbankingbrasil.org.br/participants'

// Retorna a lista de participantes fornecidas pelo openbankingbrasil.org.br
router.get('/', (req, res) => {
    axios.get(participantesUrl)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
})

module.exports = router;