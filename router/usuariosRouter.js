const express = require ('express')

const usuariosController = require ('../controller/usuariosController')

const router = express.Router();

router.get('/', usuariosController.comprobarUsuarios);

module.exports = router;