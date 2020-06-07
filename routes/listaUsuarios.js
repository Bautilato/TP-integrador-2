var express = require("express");
var router = express.Router() ;

const controller = require("../controllers/usuariosController");


router.get("/", controller.index)
router.get("/registracion", controller.registracion);
router.post('/guardar', controller.guardar);
router.get("/buscador",controller.buscador);
router.get("/buscador/buscar", controller.buscar);
router.get("/detalle/:id", controller.detalle);
router.get("/reviews", controller.logUsuario);
router.post("/reviews", controller.confirmUsuario);
router.get("/reviews/:id", controller.userReviews);
router.get("/reviews/editar/:id", controller.editar);
router.post("/reviews/editar/:id", controller.confirmacionEdit);







module.exports = router;