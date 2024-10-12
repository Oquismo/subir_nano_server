const mysql = require ('mysql') //('mysql2') en la bd

const bunyan = require ('bunyan')

const logBD = bunyan.createLogger({name:'log de la BD'})

const conexion = mysql.createConnection({

    host: process.env.HOST_DB,
    user: process.env.USER_BD,
    password: process.env.CONTRA_BD,
    database: process.env.BASE_BD,
    port: process.env.PUERTO_DB
});

conexion.connect(err =>{

    if(err){
        console.log(err)
    }

    logBD.info('conectado')
})

module.exports = conexion 

