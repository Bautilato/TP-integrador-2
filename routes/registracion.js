var express = require("express");
var router = express.Router() ;

const controller = require("../controllers/registracionController");



router.get("/", controller.favoritos);


module.exports = router;