const express = require("express");
const usuariosController = require("../controller/usuariosController");

const router = express.Router();

router.post("/", usuariosController.comprobarUsuarios);
router.post("/crear", usuariosController.crearUsuario);

module.exports = router;
