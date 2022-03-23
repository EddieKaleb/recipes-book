const express = require("express");
const router = express.Router();
const acessoController = require("../controllers/acesso");

//ROTAS DE CADASTRO
router.get("/cadastro", acessoController.register); //FORM CADASTRO
router.post("/cadastro", acessoController.add); //EXECUÇÃO DE CADASTRO
router.post("/:id", acessoController.edit); //FORM EDIÇÃO DE CADASTRO

//ROTAS DE LOGIN
router.get("/login", acessoController.login); //FORM LOGIN
router.post("/login", authMiddleware, acessoController.auth); //EXECUÇÃO DE LOGIN
router.post("/logout", acessoController.logout); //EXECUÇÃO DE LOGOUT
