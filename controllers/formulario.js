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

exports.create_post = function(req, res) {
    console.log("POST /formulario");
    console.log(req.body);

    let form = new Formulario();
    form.personas = req.body.personas;
    form.tipo_vivienda = req.body.tipo_vivienda;
    form.telefono = req.body.telefono;
    form.ecn = req.body.ecn;

    form.save((err, formStored) => {
        if (err) res.status(500).send({ message: `Error al salvar datos: ${err}` });

        res.status(200).send({ form: formStored });
    })
};