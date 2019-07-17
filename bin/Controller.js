const mongoose = require("mongoose");
const User = require("./models/User");
const Libros= require("./models/Libros");

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

}

exports.controller = new Controller() 
