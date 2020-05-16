
var express = require("express");
var router = express.Router() ;

const controller = require("../controllers/peliculaController");



router.get("/", controller.peliculas);


module.exports = router;
