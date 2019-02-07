// Import mysql connection
var connection = require('./connection');

var orm = {
    // SELECT ALL from burger
    selectAll: function (cb) {
        var queryString = 'SELECT * FROM burger';
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        });
    },

    // INSERT INTO burger (burger_name, devoured) VALUES ('test burger', false);
    insertOne: function (burger_name, cb) {
        console.log("orm: " + burger_name);
        var queryString = `INSERT INTO burger (burger_name, devoured) VALUES ("${burger_name}", false)`;
console.log("orm qStr" + queryString)
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
        cb(result)
        });
    },

    // UPDATE burger table, set devoure true, where id = x;
    updateOne: function (burger_id, cb) {
        var queryString = 'UPDATE burger SET devoured=true WHERE id=' + burger_id

        console.log('ORM-QueryString: ' + queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        });
    }
};

        module.exports = orm;