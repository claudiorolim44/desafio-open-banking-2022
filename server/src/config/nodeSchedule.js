var schedule = require('node-schedule');
var {obterTodosParticipantes, inserirTodosParticipantesNoBackup} = require(
    '../models/participante')

/* Agenda a tarefa recorrente de salvar um backup dos participantes no SQL a 
 * cada uma hora. Para isto, faz o uso do módulo node-schedule, que funciona de
 * modo similar ao cron.
 *
 * As variáveis do tipo schedule.scheduleJob() são executadas recorrentemente.
 * 
 */


//Salva um backup de todos os participantes a cada uma hora
const salvarBackupDeParticipantes = schedule.scheduleJob('0 0 */1 * * *', async () => {
    console.log("Backup de participantes acionado em",new Date().toISOString());
    obterTodosParticipantes().then((data) => {
        inserirTodosParticipantesNoBackup(data)
            .catch(err => console.log("err.message", err.message))
    }).catch(err => console.log("err.message", err.message));
});

module.exports = {};