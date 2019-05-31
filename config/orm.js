var connection = ('./connection.js');

var orm = {
    all: function (tableInput, cb) {
        connection.query("Select * From " + tableInput + ";", function (err, result) {
            if (err) throw err; 
            cb(result)
        })
    },
// Update Method
    update: function (tableInput, condition, cb) {
        connection.query("UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition + ";", function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
// Create Method
    create: function (tableInput, val, cb) {
        connection.query("INSERT INTO " + tableInput + " (burger_name)VALUES('" + val + "'); ", function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;