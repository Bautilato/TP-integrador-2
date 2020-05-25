var express = require("express");
var router = express.Router() ;

const controller = require("../controllers/usuariosController");


router.get("/", controller.index)
router.get("/registracion", controller.registracion);
router.post('/guardar', controller.guardar);

module.exports = router;