// Importando el módulo express para crear una aplicación web
const express = require("express");
// Importando el módulo bunyan para el registro de eventos
const bunyan = require("bunyan");
// Importando el módulo cors para permitir solicitudes desde diferentes orígenes
const cors = require("cors");
// Importando el módulo dotenv para cargar variables de entorno
require("dotenv").config();

// Importando los controladores de rutas para las escuderías, pilotos, usuarios y comentarios
const usuarios = require("./router/usuariosRouter");
const escuderia = require("./router/escuderiaRouter");
const pilotos = require("./router/pilotosRouter");
const comentarios = require("./router/comentariosRouter");

const Logger = require("bunyan");

// Creando un registrador de eventos para la aplicación
const logger = bunyan.createLogger({ name: "Servidor" });

const app = express();

// Configurando la aplicación para permitir solicitudes desde diferentes orígenes
app.use(cors());

// Configurando la aplicación para interpretar datos JSON en los cuerpos de las solicitudes
app.use(express.json());

// Agregando las rutas de las escuderías, pilotos, usuarios y comentarios a la aplicación
app.use("/usuarios", usuarios);
app.use("/escuderia", escuderia);
app.use("/pilotos", pilotos);
app.use("/comentarios", comentarios);  // Agregando la ruta de comentarios

// Iniciando la aplicación en el puerto especificado en las variables de entorno
app.listen(process.env.PUERTO, () => {
  // Registrando un evento de información cuando la aplicación se inicie
  logger.info("Servidor levantado");
});
