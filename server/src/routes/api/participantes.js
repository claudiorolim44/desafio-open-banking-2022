var express = require('express');
var router = express.Router();
var participante = require('../../models/participante');


router.get('/', (req, res) => {
    participante.obterTodosParticipantes()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
})

module.exports = router;