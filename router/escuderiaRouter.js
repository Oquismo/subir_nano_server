const express = require ('express')

const escuderiaController = require ('../controller/escuderiaController') // Importamos el controlador de escuderías

const router = express.Router(); // Definimos el router

router.get('/', escuderiaController.traerEscuderia) // Obtener todos los escuderías





module.exports = router; // exportamos el router para usarlo en el archivo app.js