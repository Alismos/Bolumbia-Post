const express = require("express");
const router = express.Router();
const bicicletaController = require("../controllers/bicicleta");
const formularioController = require("../controllers/formulario");

router.get("/", bicicletaController.list);
router.get("/:id/show", bicicletaController.show);

router.post("/form", formularioController.create_post);

module.exports = router;