const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personaSchema = Schema({
    nombre: String,
    apellido: String,
    sexo: String,
    fecha_nacimiento: Date,
    edad: String,
    etnia: String
})
const FormSchema = Schema({
    personas: String,
    tipo_vivienda: String,
    telefono: String,
    ecn: String,
})

/*const FormSchema = Schema({
    personas: Number,
    tipo_vivienda: String,
    telefono: String,
    ecn: String,
    habitantes: [personaSchema]
})*/

module.export = mongoose.model('formulario', FormSchema);