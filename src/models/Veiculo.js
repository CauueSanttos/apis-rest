const mongoose = require('mongoose');

const VeiculoSchema = new mongoose.Schema({
    marca: String,
    cor: String,
    modelo: String,
    portas: Number,
    capacidade_pessoas: Number,
    ano_fabricacao: Number
}, {
    timestamps: true
})

module.exports = mongoose.model('Veiculo', VeiculoSchema);