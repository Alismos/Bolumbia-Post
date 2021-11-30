const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*const personaSchema = Schema({
    nombre: { type: String },
    apellido: { type: String },
    sexo: { type: String },
    fecha_nacimiento: { type: Date },
    edad: { type: String },
    etnia: { type: String }
});*/
/*const FormSchema = Schema({
    personas: String,
    tipo_vivienda: String,
    telefono: String,
    ecn: String,
});*/

const FormSchema = Schema({
    personas: { type: Number },
    tipo_vivienda: { type: String },
    telefono: { type: String },
    ecn: { type: String },
    direccion: { type: String },
    persona1: {
        nombre: { type: String },
        apellido: { type: String },
        sexo: { type: String },
        fecha_nacimiento: { type: Date },
        edad: { type: Number },
        etnia: { type: String }
    },
    persona2: {
        nombre: { type: String },
        apellido: { type: String },
        sexo: { type: String },
        fecha_nacimiento: { type: Date },
        edad: { type: Number },
        etnia: { type: String }
    },
    persona3: {
        nombre: { type: String },
        apellido: { type: String },
        sexo: { type: String },
        fecha_nacimiento: { type: Date },
        edad: { type: Number },
        etnia: { type: String }
    }
})

module.exports = mongoose.model('formulario', FormSchema);