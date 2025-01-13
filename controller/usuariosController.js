const bd = require("../conexion/db");

const usuariosController = {
  comprobarUsuarios: function (req, res) {
    let { usuario, contrasena } = req.body;

    bd.query(
      "SELECT * FROM usuarios WHERE usuario = ? AND contrasena = ? ",
      [usuario, contrasena],
      (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).json({ mensajeError: "Error en el servidor" });
          return;
        }

        if (results.length == 0) {
          res.status(401).json({ mensajeError: "usuario no encontrado" });
        } else {
          res.status(200).json(results[0]);
        }
      }
    );
  },

  crearUsuario: function (req, res) {
    let { usuario, contrasena } = req.body;

    bd.query(
      "INSERT INTO usuarios (usuario, contrasena) VALUES (?, ?)",
      [usuario, contrasena],
      (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).json({ mensajeError: "Error al crear el usuario" });
          return;
        }

        res.status(201).json({ mensaje: "Usuario creado exitosamente" });
      }
    );
  },
};

module.exports = usuariosController;
