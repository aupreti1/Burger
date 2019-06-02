var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js")

// Links to the index.handlebars
router.get("/", function (req, res) {
    burger.all(function (burger_data) {
        console.log(burger_data);
        res.render('./index', { burger_data });
    })
})

// Update 
router.put('/burgers/update', function (req, res) {
    burger.update(req.body.burger_id, function (result) {
        res.redirect('/');
    })
})

// Create
router.post("/burgers/create", function (req, res) {
    burger.create(req.body.burger_name, function (result) {
        console.log(result);
        res.redirect('/');
    })
})

module.exports = router;