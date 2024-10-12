
const bd = require("../conexion/db");
const usuariosController ={

comprobarUsuarios (req, res){

  let {usuario} = req.body

  let contra = req.body.contrasena;

  // console.log(req.body)

  bd.query('SELECT * FROM usuarios WHERE usuario = ? AND contrasena = ? ', [usuario,contra],(err,results)=>{

    if(err){
      console.log(err)
    }
    if (results.length == 0){
      res.json({mensajeError : 'usuario no encontrado'}).status(401)
    }else
    res.json( results[0]).status(200)
    
  }
)
}


}

module.exports = usuariosController;