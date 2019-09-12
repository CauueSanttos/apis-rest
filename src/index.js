const app = require('./app');
const mongoose = require('mongoose');

/**
 * Arquivo responsável por iniciar a aplicação
 * 
 * @author Cauê dos Santos Silva <cauesantos@unidavi.edu.br>
 * @since  11/09/2019
 */

mongoose.connect('mongodb+srv://cauesantos:270599@cluster0-mcoul.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

app.listen(3333);