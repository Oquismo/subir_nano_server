const conexion = require("../conexion/db");

// Función para obtener todos los comentarios
const obtenerComentarios = (req, res) => {
  const query = "SELECT id_comentario, usuario, comentario FROM comentarios";
  conexion.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};

// Función para agregar un comentario
const agregarComentario = (req, res) => {
  const { usuario, comentario } = req.body;
  const query = "INSERT INTO comentarios (usuario, comentario) VALUES (?, ?)";
  conexion.query(query, [usuario, comentario], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId, usuario, comentario });
  });
};

module.exports = {
  obtenerComentarios,
  agregarComentario,
};
