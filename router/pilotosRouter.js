// Importando el módulo express para crear una aplicación web
const express = require("express");
// Importando el controlador de pilotos desde el archivo de controladores
const pilotosController = require("../controller/pilotosController");

const router = express.Router();

router.get("/", pilotosController.traerPilotos);

module.exports = router;
