// Importando la conexión a la base de datos
const bd = require("../conexion/db");

const usuariosController = {
  // Función para comprobar si un usuario existe
  comprobarUsuarios: function (req, res) {
    let { usuario } = req.body;
    let contrasena = req.body.contrasena;

    bd.query(
      "SELECT * FROM usuarios WHERE usuario = ? AND contrasena = ? ",
      [usuario, contrasena],
      (err, results) => {
        if (err) {
          console.log(err);
          return;
        }

        if (results.length == 0) {
          res.json({ mensajeError: "usuario no encontrado" }).status(401);
        } else {
          res.json(results[0]).status(200);
        }
      }
    );
  },

  // Función para registrar un nuevo usuario
  registrarUsuario: function (req, res) {
    const { usuario, correo_usuario, contrasena } = req.body;

    // Validar los campos
    if (!usuario || !correo_usuario || !contrasena) {
      return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
    }

    // Comprobar si el usuario o el correo ya existen
    bd.query(
      "SELECT * FROM usuarios WHERE usuario = ? OR correo_usuario = ?",
      [usuario, correo_usuario],
      (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ mensaje: "Error interno del servidor" });
        }

        // Si ya existe el usuario o correo
        if (results.length > 0) {
          return res.status(400).json({ mensaje: "El usuario o correo ya existe" });
        }

        // Insertar el nuevo usuario en la base de datos
        bd.query(
          "INSERT INTO usuarios (usuario, correo_usuario, contrasena) VALUES (?, ?, ?)",
          [usuario, correo_usuario, contrasena],
          (err, result) => {
            if (err) {
              console.log(err);
              return res.status(500).json({ mensaje: "Error al registrar el usuario" });
            }

            // Respuesta de éxito
            res.status(201).json({ mensaje: "Usuario registrado correctamente" });
          }
        );
      }
    );
  }
};

// Exportando el controlador de usuarios
module.exports = usuariosController;
