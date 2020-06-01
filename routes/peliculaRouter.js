
var express = require("express");
var router = express.Router() ;

const controller = require("../controllers/peliculaController");



router.get("/", controller.peliculas);

router.post("/crear", controller.crear);


module.exports = router;
