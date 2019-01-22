// var connection = require('../config/connection.js');


// var orm = {

//     selectAll: function (cb) {
//         var queryString = "SELECT * FROM burgers";
//         connection.query(queryString, function (err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result);
//         });
//     },

//     insertOne: function (burger, cb) {
//         var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
//         connection.query(queryString, [burger], function (err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result);
//         });
//     },

//     updateOne: function (id, cb) {
//         var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";

//         connection.query(queryString, [id], function (err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result);
//         });
//     }
// };

// module.exports = orm;




// Import mysql connection
var connection = require('./connection');

var orm = {
// SELECT ALL from burgers
    selectAll: function(cb) {
        var queryString = 'SELECT * FROM burgers';
console.log('QueryString: ' + queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result)
        });
    },

// INSERT INTO burgers (burger_name, devoured) VALUES ('test burger', false);
    insertOne: function(tableInput, colOne, colTwo, colOneVal, colTwoVal, cb) {
        var queryString = 'INSERT INTO ?? (??, ??) VALUES (??, ??)';
    
        console.log('QueryString: ' + queryString + tableInput + colOne + colTwo + colOneVal + colTwoVal);

        connection.query(queryString, [tableInput, colOne, colTwo, colOneVal, colTwoVal], function(err, result) {
        if (err) throw err;
        console.log(result);
        });
        cb(result)
    },

// UPDATE burgers table, set devoure true, where id = x;
    updateOne: function(tableInput, colToSearch, valOfCol, cb) {
        var queryString = 'UPDATE ?? set ?? = true WHERE ?? = ?';

        console.log('QueryString: ' + queryString + tableInput + colToSearch + valOfCol);
  
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        console.log(result);
        });
        cb(result)
    }
};

module.exports = orm;