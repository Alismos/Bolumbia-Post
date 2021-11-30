const { MongoClient, ObjectID } = require("mongodb");
const Express = require("express");
const Cors = require("cors");
const BodyParser = require("body-parser");
const { request } = require("express");
const { InternalServerError } = require("http-errors");
const bodyParser = require("body-parser");

const Formulario = require("../models/formulario");

const client = new MongoClient("mongodb+srv://alismo:kLQqogdZK8JvIyNJ@redbici.wzv6d.mongodb.net/DoS-database?retryWrites=true&w=majority");

const server = Express();


server.use(BodyParser.json());
server.use(BodyParser.urlencoded({ extended: true }));
//server.use(Cors());

var collection;

exports.interfaz = function(re, res) {
    res.render("formulario/index");
};

exports.create_get = function(req, res) {
    res.render("formulario/create");
};

exports.create_post = function(req, res) {
    console.log("POST /formulario");
    console.log(req.body);

    var form = new Formulario({
        personas: req.body.personas,
        tipo_vivienda: req.body.tipo_vivienda,
        telefono: req.body.telefono,
        cfn: req.body.cfn,
        direccion: req.body.direccion,
        persona1: {
            nombre: req.body.nombre1,
            apellido: req.body.apellido1,
            sexo: req.body.sexo1,
            fecha_nacimiento: req.body.date1,
            edad: req.body.edad1,
            etnia: req.body.etnia1
        },
        persona2: {
            nombre: req.body.nombre2,
            apellido: req.body.apellido2,
            sexo: req.body.sexo2,
            fecha_nacimiento: req.body.date2,
            edad: req.body.edad2,
            etnia: req.body.etnia2
        },
        persona3: {
            nombre: req.body.nombre3,
            apellido: req.body.apellido3,
            sexo: req.body.sexo3,
            fecha_nacimiento: req.body.date3,
            edad: req.body.edad3,
            etnia: req.body.etnia3
        }
    });

    form.save(function(err, form) {
        if (err) return res.status(500).send(err.message);
        res.status(200).jsonp(form);
    });
};