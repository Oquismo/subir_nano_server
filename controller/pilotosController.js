// Importando la conexión a la base de datos desde el archivo de conexión
const bd = require("../conexion/db");

// Definiendo un controlador de pilotos que contiene una función para obtener los últimos tres pilotos ordenados por su ID en orden descendente
const pilotosController = {
  traerPilotos: function (req, res) {
    // Ejecutando una consulta SQL para obtener los últimos tres pilotos ordenados por su ID en orden descendente
    bd.query(
      "SELECT * FROM pilotos ORDER BY id_piloto DESC LIMIT 3",
      (err, results) => {
        if (err) {
          console.log(err);
          return;
        }

        // Si la consulta es exitosa, envía los resultados en formato JSON con un código de estado HTTP 200
        res.json(results).status(200);
      }
    );
  },
};

// Exportando el controlador de pilotos para su uso en otras partes de la aplicación
module.exports = pilotosController;
