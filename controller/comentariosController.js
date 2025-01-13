// Importando la conexión a la base de datos
const conexion = require("../conexion/db"); // Ruta al archivo donde definiste la conexión

// Función para agregar un comentario
const agregarComentario = (req, res) => {
  // Obteniendo los datos del cuerpo de la solicitud
  const { usuario, comentario } = req.body;

  // Validando que los campos no estén vacíos
  if (!usuario || !comentario) {
    return res.status(400).json({ mensaje: "Faltan datos necesarios" });
  }

  // Preparando la consulta SQL para insertar el comentario
  const query = "INSERT INTO comentarios (usuario, comentario) VALUES (?, ?)";

  // Ejecutando la consulta en la base de datos
  conexion.query(query, [usuario, comentario], (err, results) => {
    if (err) {
      // Si ocurre un error, lo devolvemos en la respuesta
      return res.status(500).json({ mensaje: "Error al agregar el comentario", error: err });
    }

    // Si la inserción es exitosa, respondemos con un mensaje de éxito
    return res.status(200).json({ mensaje: "Comentario agregado exitosamente", id_comentario: results.insertId });
  });
};

// Exportando la función para poder usarla en el router
module.exports = { agregarComentario };
