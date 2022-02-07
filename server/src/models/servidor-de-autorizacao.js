var participante = require('./participante');
var {obterListaUnicaPor, ordernarListaPor} = require('../utilities/utilities');

var servidorDeAutorizacaoModelo = {
    obterTodosServidoresDeAutorizacao
};

function obterTodosServidoresDeAutorizacao() {
    return new Promise((resolve, reject) => {
        participante.obterTodosParticipantes()
        .then((data) => {
            let participantes = data;
            let servidoresDeAutorizacao = [];
            participantes.map(participante => { 
                participante.AuthorisationServers.map(servidorDeAutorizacao => {
                    servidoresDeAutorizacao.push(servidorDeAutorizacao);
                    return false;
                })
                return false;
            });
            servidoresDeAutorizacao = obterListaUnicaPor(
                servidoresDeAutorizacao, "CustomerFriendlyName")        
            servidoresDeAutorizacao = ordernarListaPor(
                servidoresDeAutorizacao, "CustomerFriendlyName")
            resolve(servidoresDeAutorizacao);
        })
        .catch((error) => {
            reject(error)
        });
    });
};

module.exports = servidorDeAutorizacaoModelo;
