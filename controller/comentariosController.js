const conexion = require("../conexion/db");

const agregarComentario = (req, res) => {
    const { texto, autor } = req.body;

    if (!texto || !autor) {
        return res.status(400).json({ error: "Texto y autor son requeridos" });
    }

    const query = "INSERT INTO comentarios (comentario, usuario) VALUES (?, ?)";
    conexion.query(query, [texto, autor], (err, result) => {
        if (err) {
            console.error("Error al agregar comentario:", err);
            return res.status(500).json({ error: "Error al agregar comentario" });
        }
        res.status(201).json({ mensaje: "Comentario agregado exitosamente" });
    });
};

const obtenerComentarios = (req, res) => {
    const query = "SELECT * FROM comentarios";
    conexion.query(query, (err, resultados) => {
        if (err) {
            console.error("Error al obtener comentarios:", err);
            return res.status(500).json({ error: "Error al obtener comentarios" });
        }
        res.status(200).json(resultados);
    });
};

module.exports = {
    agregarComentario,
    obtenerComentarios
};
