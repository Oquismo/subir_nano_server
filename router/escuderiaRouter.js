// Importando el módulo express para crear una aplicación web
const express = require("express");

// Importando el controlador de escuderías desde el archivo de controladores
const escuderiaController = require("../controller/escuderiaController");

const router = express.Router();

// Agregando una ruta GET para obtener todas las escuderías ordenadas por su ID
router.get("/", escuderiaController.traerEscuderia);

// Exportando el router personalizado para su uso en otras partes de la aplicación
module.exports = router;
