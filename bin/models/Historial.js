const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HistorialSchema = new Schema({
    nombrehistorial: String,
    fecha: String

});

var Historial = mongoose.model("Historial", HistorialSchema);
module.exports = Historial;