const express = require("express");
const router = express.Router();

/*GET listar categorias*/
router.get("/", categorias.index);

module.exports = router;
