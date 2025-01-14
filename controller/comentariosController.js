const conexion = require("../conexion/db"); // Asegúrate de importar la conexión a la base de datos

const agregarComentario = (req, res) => {
    const { texto, autor } = req.body;

    // Validar los datos recibidos
    if (!texto || !autor) {
        return res.status(400).json({ error: "Faltan datos requeridos" });
    }

    // Lógica para agregar el comentario
    // Aquí deberías agregar el comentario a tu base de datos o realizar la acción necesaria
    // Por ejemplo:
    // Comentarios.create({ texto, autor })
    //     .then(comentario => res.status(201).json(comentario))
    //     .catch(error => res.status(500).json({ error: "Error al guardar el comentario" }));

    res.status(201).json({ mensaje: "Comentario agregado correctamente" });
};

const obtenerComentarios = (req, res) => {
    // Ejemplo: Lógica para obtener comentarios de la BD
    // conexion.query('SELECT * FROM comentarios', (err, resultados) => {
    //   if (err) return res.status(500).json({ error: "Error al consultar" });
    //   return res.status(200).json(resultados);
    // });
    res.status(200).json({ mensaje: "Aquí se mostrarán los comentarios" });
};

module.exports = {
    agregarComentario,
    obtenerComentarios
};
