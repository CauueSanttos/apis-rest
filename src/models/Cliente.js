const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    'nome': String,
    'idade': Number,
    'profissao': String
}, {
    "timestamps": true
}
);

module.exports = mongoose.model('Cliente', ClienteSchema);