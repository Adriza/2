const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PublicacionesSchema = new Schema({
    nombrepublicacion: String,
    año: String

});

var Publicaciones = mongoose.model("Publicaciones", PublicacionesSchema);
module.exports = Publicaciones;