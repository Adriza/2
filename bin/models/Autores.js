const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AutoresSchema = new Schema({
    nombre: String,
    apellido: String


});

var Autores = mongoose.model("Autores", AutoresSchema);
module.exports = Autores;