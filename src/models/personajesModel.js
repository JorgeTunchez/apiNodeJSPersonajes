const db = require('../config/dbConfig');

class Personaje{
    
    getPersonajes(callback){
        const sql = "select id, nombre, edad, altura, peso from personajes";
        db.query(sql,callback);
    }

    getPersonajeByID(id, callback){
        const sql = "select id, nombre, edad, altura, peso from personajes where id = ?";
        db.query(sql,[id],callback);
    }

    postPersonaje(nombre, edad, altura, peso, callback){
        const sql = "insert into personajes (nombre, edad, altura, peso) values (?,?,?,?)";
        db.query(sql,[nombre, edad, altura, peso], (err, result)=>{
            if(err){
                return callback(err,null);
            }

            callback(null,result.insertId);
        });
    }

    putPersonaje(id, nombre, edad, altura, peso, callback){
        const sql = "update personajes set nombre = ?, edad = ?, altura = ?, peso = ? where id = ?";
        db.query(sql,[nombre, edad, altura, peso, id],callback);
    }

    deletePersonaje(id, callback){
        const sql = "delete from personajes where id = ?";
        db.query(sql,[id],callback);
    }

}

module.exports = new Personaje();