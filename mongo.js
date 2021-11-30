/*const { MongoClient, ObjectID } = require("mongodb");
const Express = require("express");
const Cors = require("cors");
const BodyParser = require("body-parser");
const { request } = require("express");
const { InternalServerError } = require("http-errors");
const bodyParser = require("body-parser");

const client = new MongoClient("mongodb+srv://alismo:kLQqogdZK8JvIyNJ@redbici.wzv6d.mongodb.net/DoS-database?retryWrites=true&w=majority");

const server = Express();

server.use(BodyParser.json());
server.use(BodyParser.urlencoded({ extended: true }));
//server.use(Cors());
server.use(bodyParser.json());

var collection;

server.post('/')*/
/*
server.get("/search", async(request, response) => {
    try {
        let result = await collection.aggregate([{
            "$search": {
                "text": {
                    "query": `${request.query.term}`, //
                    "path": "ecn"
                }
            }
        }]).toArray();
        response.send(result);
    } catch (e) {
        response.status(500).send({ message: e.message });
    }
});*/


/*
server.listen("3001", async() => {
    try {
        await client.connect();
        collection = client.db("DoS-database").collection("forms");
    } catch (e) {
        console.error(e);
    }
});*/