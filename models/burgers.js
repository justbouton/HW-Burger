// Import the ORM to create functions that will interact with the database.
var orm = require('../config/orm.js');

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
// Possibly need insertOne: function ([ <-square brackets?

var burger = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    insertOne: function (tableInput, colOne, colTwo, colOneVal, colTwoVal, cb) {
        orm.insertOne(tableInput, colOne, colTwo, colOneVal, colTwoVal, function (res) {
            cb(res);
        });
    },
    updateOne: function (tableInput, colToSearch, valOfCol, cb) {
        orm.updateOne(tableInput, colToSearch, valOfCol, function (res) {
            cb(res);
        });
    }
};

// Export the database for controller
module.exports = burger;

