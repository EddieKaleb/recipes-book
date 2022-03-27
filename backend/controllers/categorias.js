const { Categoria } = require('../models');


const controller = {
    //LISTAR TODAS AS CATEGORIAS
    index: async (req, res, next) => {
        const categorias = await Categoria.findAll();
        res.json(categorias)
    }
}

module.exports = controller