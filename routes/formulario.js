const express = require("express");
const router = express.Router();
const formularioController = require("../controllers/formulario");


router.get("/", formularioController.interfaz);

router.get("/create", formularioController.create_get);
router.post("/create", formularioController.create_post);

module.exports = router;