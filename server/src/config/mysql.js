var mysql = require('mysql');

var pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    timezone: process.env.MYSQL_TIMEZONE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0 //Valor "0" => Fila sem limite
});

module.exports = pool;