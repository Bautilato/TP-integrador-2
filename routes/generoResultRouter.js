var express = require("express");
var router = express.Router() ;

const controller = require("../controllers/generoResultController");



router.get("/", controller.generoResult);


module.exports = router;
