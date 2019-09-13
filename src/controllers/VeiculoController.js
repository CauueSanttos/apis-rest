const Veiculo = require('../models/Veiculo');

module.exports = {

    async all(req, res) {
        return res.json(await Veiculo.find().sort('-createdAt'));
    },

    async insert(req, res) {
        const { marca, cor, modelo, portas, capacidade_pessoas, ano_fabricacao } = req.body;

        const newVeiculo = await Veiculo.create({
            marca,
            cor,
            modelo,
            portas,
            capacidade_pessoas,
            ano_fabricacao
        });

        return res.json(newVeiculo);
    },

    async update(req, res) {
        const veiculo = await Veiculo.findById(req.params.id);

        const { portas, capacidade_pessoas, ano_fabricacao } = req.body;

        Object.assign(veiculo, {
            portas,
            capacidade_pessoas,
            ano_fabricacao
        }).save();

        return res.json(veiculo);
    },

    async delete(req, res) {
        await Veiculo.findById(req.params.id).remove();

        return res.json({'response': 'Veiculo excluído com sucesso!'});
    },

    async getVeiculo(req, res) {
        return res.json(await Veiculo.findById(req.params.id));
    }
};