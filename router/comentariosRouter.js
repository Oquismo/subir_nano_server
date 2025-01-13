const express = require("express");
const router = express.Router();

// Controlador de comentarios, donde se manejarán las lógicas de los comentarios.
const comentariosController = require("../controller/comentariosController");

// Ruta para agregar un comentario
router.post("/", comentariosController.agregarComentario);

// Puedes agregar más rutas aquí en el futuro si lo necesitas (por ejemplo, obtener comentarios, eliminar comentarios, etc.).

module.exports = router;
