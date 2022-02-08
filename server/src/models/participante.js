var pool = require('../config/mysql');
const axios = require('axios');
const participantesUrl = 
    'https://data.directory.openbankingbrasil.org.br/participants'

var participanteModelo = {
    obterTodosParticipantes,
    obterTodosParticipantesPeloBackup
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


// Retorna a lista de participantes previamente armazenadas em um backup em SQL 
// (a ser utilizada em caso de indisponibilidade do openbankingbrasil.org.br)
function obterTodosParticipantesPeloBackup() {
    return new Promise((resolve, reject) => {
        pool.query(
            `select api_response_backup from api_backup ` + 
                `where api_url = '${participantesUrl}';`, 
            (error, result, fields) => {
            if (error) {
                reject(error);
            } else {
                const jsonResult = JSON.parse(result[0].api_response_backup);
                resolve(jsonResult);
            }
        });
    });
}


module.exports = participanteModelo;
