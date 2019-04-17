var mysql = require('mysql');

var connection = mysql.createPool({

    host: 'us-cdbr-iron-east-02.cleardb.net',
    user: 'b38701641beb69',
    password: 'aaf4ca59',
    database: 'heroku_aa5b7f36b1b65eb',
    timezone: 'UTC'
});

module.exports = connection;
