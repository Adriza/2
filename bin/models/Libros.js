const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LibrosSchema = new Schema({
    nombre: String,
    autor: String

});

var Libros = mongoose.model("Libros", LibrosSchema);
module.exports = Libros;
