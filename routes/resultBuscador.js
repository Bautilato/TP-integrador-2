var express = require("express");
var router = express.Router() ;

const controller = require("../controllers/resultBuscadorController");



router.get("/", controller.resultBuscador);


module.exports = router;
