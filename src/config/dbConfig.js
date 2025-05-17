const mysql = require("mysql");
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tutoriales',
    port: 3306
});

db.connect((err)=>{
    if(err){
        throw err;
    }

    console.log('Conexion a base datos mysql exitosa');
});

module.exports = db;