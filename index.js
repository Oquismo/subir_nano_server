const express = require("express");
const cors = require("cors");
const logger = require("./logger"); // Asegúrate de que el módulo logger esté correctamente importado
const usuariosRouter = require("./router/usuariosRouter");
const escuderiaRouter = require("./router/escuderiaRouter");
const pilotosRouter = require("./router/pilotosRouter");

const app = express();

// Configurando la aplicación para permitir solicitudes desde diferentes orígenes
app.use(cors());

// Configurando la aplicación para interpretar datos JSON en los cuerpos de las solicitudes
app.use(express.json());

// Agregando las rutas de las escuderías, pilotos y usuarios a la aplicación
app.use("/usuarios", usuariosRouter);
app.use("/escuderia", escuderiaRouter);
app.use("/pilotos", pilotosRouter);

// Iniciando la aplicación en el puerto especificado en las variables de entorno
const PORT = process.env.PUERTO || 3000;
app.listen(PORT, () => {
  // Registrando un evento de información cuando la aplicación se inicie
  logger.info(`Servidor levantado en el puerto ${PORT}`);
});
