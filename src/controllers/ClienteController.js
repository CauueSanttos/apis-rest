const Cliente = require('../models/Cliente');

module.exports = {

    async index(req, res) {
        const clientes = await Cliente.find().sort('-createdAt');

        return res.json(clientes);
    },

    async store(req, res) {
        const { nome, idade, profissao } = req.body;

        const newCliente = await Cliente.create({
           nome,
           idade,
           profissao
        });

        return res.json(newCliente);
    },
    
    async update(req, res) {
        const {idade, profissao } = req.body;

        const findCliente = await Cliente.findById(req.params.id);

        findCliente.idade = idade;
        findCliente.profissao = profissao;

        await findCliente.save();

        return res.json(findCliente);
    },

    async delete(req, res) {
        const findCliente = await Cliente.findById(req.params.id);

        await findCliente.remove();

        return res.json({"response": "Client deleted with success!"});
    }
};