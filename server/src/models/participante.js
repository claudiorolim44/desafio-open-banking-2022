const axios = require('axios');
const participantesUrl = 
    'https://data.directory.openbankingbrasil.org.br/participants'

var participanteModelo = {
    obterTodosParticipantes
};

// Retorna a lista de participantes fornecidas pelo openbankingbrasil.org.br
function obterTodosParticipantes() {
    return new Promise((resolve, reject) => {
        axios.get(participantesUrl)
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error)
        });
    });
};



module.exports = participanteModelo;
