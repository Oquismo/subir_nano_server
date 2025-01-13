const express = require("express");

const usuariosController = require("../controller/usuariosController");

const router = express.Router();

router.post("/", usuariosController.comprobarUsuarios);

router.post("/register", usuariosController.registrarUsuario);



module.exports = router;
