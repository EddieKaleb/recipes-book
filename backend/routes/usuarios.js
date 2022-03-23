const express = require("express"),
  router = express.Router(),
  userController = require("../controllers/usuarios");

//LISTAR TODOS OS USUÁRIOS
router.get("/", userController.index);

//LISTAR USUÁRIOS POR ID
router.get("/:id", userController.show);

//CADASTRAR USUÁRIOS
router.post("/cadastrar", userController.add);

module.exports = router;
