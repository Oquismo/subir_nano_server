const bd = require("../conexion/db");

const pilotosController = {
    traerPilotos(req, res) {
    bd.query(
      "SELECT * FROM pilotos ORDER BY id_piloto DESC LIMIT 3",
      (err, results) => {
        if (err) {
          console.log(err);
        }

        res.json(results).status(200);
      }
    );
  },

}
module.exports = pilotosController