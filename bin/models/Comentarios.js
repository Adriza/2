const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComentariosSchema = new Schema({
    comentario: String,
    fecha: String

});

var Comentarios = mongoose.model("Comentarios", ComentariosSchema);
module.exports = Comentarios;