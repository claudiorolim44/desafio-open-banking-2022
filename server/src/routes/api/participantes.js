var express = require('express');
var router = express.Router();
var {obterTodosParticipantes} = require('../../models/participante');


router.get('/', (req, res) => {
    obterTodosParticipantes()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
          res.status(500).send(err);
      });
})

module.exports = router;