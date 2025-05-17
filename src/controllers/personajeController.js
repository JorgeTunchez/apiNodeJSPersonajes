const personajeModel = require("../models/personajesModel");

module.exports={

    getPersonajes: (req, res)=>{
        personajeModel.getPersonajes((err,result)=>{
            if(err){
                res.status(500).json({
                    error: err.message
                });
            }

            res.status(200).json({
                data: result
            });
        });
    },

    getPersonajesByID: (req, res)=>{

        const {id} = req.params;

        personajeModel.getPersonajeByID(id, (err,result)=>{
            if(err){
                res.status(500).json({
                    error: err.message
                });

                return;
            }

            if(result.length == 0){
                res.status(404).json({
                    message: "Personaje no encontrado."
                });

                return;
            }

            res.status(200).json({
                data: result
            });
        });
    },


    postPersonaje : (req, res) =>{
        const {nombre, edad, altura, peso} = req.body;

        personajeModel.postPersonaje(nombre, edad, altura, peso, (err, result) =>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            res.status(201).json({message: 'Personaje creado correctamente', data: {idInsertado: result}});
        })
    },

    putPersonaje: (req, res) =>{

        const {id} = req.params;
        const {nombre, edad, altura, peso} = req.body;

        personajeModel.putPersonaje(id, nombre, edad, altura, peso, (err, result) =>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            if(result.affectedRows === 0){
                res.status(404).json({message: 'Personaje No Encontrado'});
                return;
            }
            res.status(200).json({message: 'Personaje actualizado correctamente'});
        })
    },

    deletePersonaje: (req, res) =>{

        const {id} = req.params;

        personajeModel.deletePersonaje(id, (err, result) =>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            if(result.affectedRows === 0){
                res.status(404).json({message: 'Personaje No Encontrado'});
                return;
            }

            res.status(200).json({message: 'Personaje eliminado correctamente'});

        })
    }
}