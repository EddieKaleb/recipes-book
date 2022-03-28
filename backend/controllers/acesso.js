const { Usuario } = require('../models');
const bcrypt = require('bcrypt');

const controller = {
    //LOGIN USUÁRIO
    auth: async (req, res) => {
        const { email, senha } = req.body;
        const usuarioSalvo = await Usuario.findOne({ where: { email } })
        if (usuarioSalvo) {
            if (await bcrypt.compare(senha, usuarioSalvo.senha)) {
                res.json(usuarioSalvo)
            } else {
                res.send("Dados de login inválidos!")
            }
        } else {
            res.send("E-mail não cadastrado!")
        }
    }
}

module.exports = controller
