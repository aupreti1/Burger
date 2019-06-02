var orm = require('../config/orm.js');

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        })
    },

    // Update
    update: function (id, cb) {
        orm.update('burgers', id, cb);
    },

    // Create
    create: function (name, cb) {
        orm.create('burgers', name, cb);
    }
}

module.exports = burger;