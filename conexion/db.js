// Importando el módulo mysql para establecer una conexión con la base de datos
const mysql = require("mysql2");

// Importando el módulo bunyan para el registro de eventos
const bunyan = require("bunyan");

// Creando un registrador para los eventos de la base de datos
const logBD = bunyan.createLogger({ name: "log de la BD" });

// Estableciendo una conexión con la base de datos usando el método createConnection() de mysql
// Los detalles de la conexión se obtienen de las variables de entorno
const conexion = mysql.createConnection({
  host: process.env.HOST_DB,
  user: process.env.USER_BD,
  password: process.env.CONTRA_BD,
  database: process.env.BASE_BD,
  port: process.env.PUERTO_DB,
});
// Conectando a la base de datos y manejando cualquier error que pueda ocurrir
conexion.connect((err) => {
  // Si ocurre un error durante el proceso de conexión, registrelo y detenga la ejecución
  if (err) {
    console.log(err);
  }
  // Si la conexión es exitosa, registre un mensaje indicando que la base de datos está conectada
  logBD.info("conectado");
});
// Exportando la conexión a la base de datos para su uso en otras partes de la aplicación
module.exports = conexion;
