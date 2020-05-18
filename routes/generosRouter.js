var express = require("express");
var router = express.Router() ;

const controller = require("../controllers/generosController");



router.get("/", controller.generos);


module.exports = router;
