// Importando la conexión a la base de datos desde el archivo de conexión
const bd = require("../conexion/db");

// Definiendo un controlador de escuderías que contiene una función para obtener todas las escuderías ordenadas por su ID
const escuderiaController = {
  traerEscuderia(req, res) {
    // Ejecutando una consulta SQL para obtener todas las escuderías ordenadas por su ID
    bd.query(
      "SELECT * FROM escuderia ORDER BY id_escuderia",
      (err, results) => {
        if (err) {
          console.log(err);
        }

        // Si la consulta es exitosa, envía los resultados en formato JSON con un código de estado HTTP 200
        res.json(results).status(200);
      }
    );
  },
};
// Exportando el controlador de escuderías para su uso en otras partes de la aplicación
module.exports = escuderiaController;
