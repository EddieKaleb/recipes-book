const express = require("express");
const router = express.Router();
const categoriasController = require('../controllers/categorias')

//LISTAR TODAS AS CATEGORIAS
router.get("/", categoriasController.index);

module.exports = router;
