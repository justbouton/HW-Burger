// Setup mysql connection
var mysql = require('mysql');

var connection;
if (process.env.JAWSDB_URL) { 
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'burgersDB'
    })
};

var mysql = require('mysql');

// Connect to mysql
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log('connected as id: ' + connection.threadId);
})

// Export for ./orm.js
module.exports = connection;