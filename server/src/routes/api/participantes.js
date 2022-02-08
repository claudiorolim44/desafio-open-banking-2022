var express = require('express');
var router = express.Router();
var {obterTodosParticipantes, obterTodosParticipantesPeloBackup, 
  inserirTodosParticipantesNoBackup} = require('../../models/participante');


router.get('/', (req, res) => {
    obterTodosParticipantes()
    .then((data) => {
      inserirTodosParticipantesNoBackup(data)
        .catch(err => console.log("err.message", err.message))
      res.send(data);
    })
    .catch((err) => {
        console.log("err.message", err.message)
        obterTodosParticipantesPeloBackup()
          .then(data => res.send(data))
          .catch(err => res.status(500).send(err));
    });
})

module.exports = router;