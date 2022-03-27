const { Receita, Sequelize } = require('../models')
const op = Sequelize.Op;

const controller = {

    //LISTAR TODAS RECEITAS
    index: async (req, res, next) => {
        const receitas = await Receita.findAll();
        res.json(receitas)
    },
    //LISTAR RECEITAS POR ID
    show: async (req, res, next) => {
        const { id } = req.params;
        if (!id) {
            res.status(400).send("Receita não informada!")//VERIFICAR NECESSIDADE
        }
        const receitaId = await Receita.findByPk(id)
        if (receitaId) {
            res.json(receitaId)
        } else {
            res.status(500).send("Usuário não encontrado!")
        }
    },
    //LISTAR RECEITAS POR ID DA CATEGORIA
    categorias: async (req, res, next) => {
        const { id } = req.params;
        const receitasPorCategoria = await Receita.findAll({
            where: {
                id_categoria: id
            }
        })
        if (receitasPorCategoria) {
            res.json(receitasPorCategoria)
        } else {
            res.status(500).send("Usuário não encontrado!") //ESTÁ TRAZENDO UM ARRAY VAZIO AO INVÉS DA MENSAGEM
            console.log(receitasPorCategoria)
        }
    },
    //LISTAR RECEITAS POR TÍTULO (VERIFICAR IMPLEMENTAÇÃO)
    titulo: async (req, res, next) => {
        const { titulo } = req.query;
        const receitasPorTitulo = await Receita.findAll({
            where: { [op.like]: `%${titulo}%` }
        })

        if (receitasPorTitulo) {
            res.json(receitasPorTitulo)
        } else {
            res.status(500).send("Usuário não encontrado!") //ESTÁ TRAZENDO UM ARRAY VAZIO AO INVÉS DA MENSAGEM
        }
    },

    //CADASTRAR RECEITAS

}

module.exports = controller;