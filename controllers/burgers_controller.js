var express = require('express');

var router = express.Router();

var burger = require("../models/burgers.js");

router.get("/", function (req, res) {
        res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function (req, res) {
    burger.insertOne(req.body.burger_name, function(data) {
        console.log("burg_controller data: " + data);

        res.redirect("/");
    });
});

router.put("/burgers/:id", function(req, res) { 
    var id = req.params.id;

    burger.updateOne(id, function(result) {
    console.log(result);
    
    res.sendStatus(200)
    });
});

module.exports = router;