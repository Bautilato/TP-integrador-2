var express = require("express");
var router = express.Router() ;

const controller = require("../controllers/usuariosController");


router.get("/", controller.index)
router.get("/registracion", controller.registracion);
router.post('/guardar', controller.guardar);
router.get("/buscador",controller.buscador);
router.get("/buscador/buscar", controller.buscar);





module.exports = router;