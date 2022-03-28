const { Usuario } = require('../models');
const bcrypt = require('bcrypt');


const controller = {
    //LISTAR TODOS OS USUÁRIOS
    index: async (req, res, next) => {
        const usuarios = await Usuario.findAll();
        res.json(usuarios)
    },
    //LISTAR USUÁRIOS POR ID
    show: async (req, res, next) => {
        const { id } = req.params;
        if (!id) {
            res.status(400).send("Usuário não informado!")//VERIFICAR NECESSIDADE
        }
        const usuarioId = await Usuario.findByPk(id)
        if (usuarioId) {
            res.send(usuarioId)
        } else {
            res.status(500).send("Usuário não encontrado!")
        }
    },
    //CADASTRAR USUÁRIOS
    add: async (req, res, next) => {
        const { nome, email, senha } = req.body;
        const senhaCrypto = await bcrypt.hash(senha, 12);
        const validarEmail = await Usuario.findOne({ where: { email } })
        if (validarEmail) {
            res.status(200).send("E-mail já cadastrado!")
        } else {
            const novoUsuario = await Usuario.create({
                nome,
                email,
                senha: senhaCrypto
            })
            if (novoUsuario) {
                res.json(novoUsuario)
            } else {
                res.status(500).send("Usuário não cadastrado!")
            }
        }
    }
}

module.exports = controller;