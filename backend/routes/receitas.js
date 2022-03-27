const express = require("express")
const router = express.Router()
const receitasController = require("../controllers/receitas");

//LISTAR RECEITAS GERAL E POR ID
router.get("/", receitasController.index);
router.get("/:id", receitasController.show);

// //LISTAR RECEITAS POR CATEGORIA
router.get("/categorias/:id", receitasController.categorias);

// //LISTAR RECEITAS POR TÍTULO
router.get("/:titulo", receitasController.titulo);

// //CADASTRAR RECEITAS
// router.post("/cadastro", receitasController.add);

// //EDITAR RECEITAS
// router.put("/:id/editar", receitasController.edit);

// //DELETAR RECEITAS
// router.delete("/:id/excluir", receitasController.delete);

module.exports = router;
