const express = require ('express')

const pilotosController = require('../controller/pilotosController');

const router = express.Router(); // Definimos el router

router.get('/', pilotosController.traerPilotos) // Obtener todos los pilotos





module.exports = router; // exportamos el router para usarlo en el archivo app.js