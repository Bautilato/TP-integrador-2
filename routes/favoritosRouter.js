var express = require("express");
var router = express.Router() ;

const controller = require("../controllers/favoritoController");



router.get("/", controller.favoritos);


module.exports = router;
