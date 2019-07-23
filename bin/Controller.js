const mongoose = require("mongoose");
const User = require("./models/User");
const Libros= require("./models/Libros");
const Autores= require("./models/Autores");
const Publicaciones= require("./models/Publicaciones");
const Comentarios= require("./models/Comentarios");
const Historial= require("./models/Historial");


class Controller{
    constructor(){
        this.connect();
    }

    async connect(){
        try{
            await mongoose.connect(
                "mongodb+srv://admin:buscadordelibros2019@cluster0-iw46q.mongodb.net/2DB?retryWrites=true&w=majority",
                {useNewUrlParser:true}
             );
             console.log("conectados a la base de datos")

        } catch(e){
            console.error(e)
        }
    }

    getUsers(res){
        User.find({}, (err, usuarios) => {
            if(err) throw err;
            res.send( usuarios );
        })
    }
    getLibros(res){
        Libros.find({}, (err, libros) => {
            if(err) throw err;
            res.send( libros );
        })
    }
    getAutores(res){
        Autores.find({}, (err, autores) => {
            if(err) throw err;
            res.send( autores );
        })
    }
    getComentarios(res){
        Comentarios.find({}, (err, comentarios) => {
            if(err) throw err;
            res.send( comentarios );
        })
    }
    getHistorial(res){
        Historial.find({}, (err, historial) => {
            if(err) throw err;
            res.send( historial );
        })
    }
    getPublicaciones(res){
        Publicaciones.find({}, (err, publicaciones) => {
            if(err) throw err;
            res.send( publicaciones );
        })
    }

}

exports.controller = new Controller() 
