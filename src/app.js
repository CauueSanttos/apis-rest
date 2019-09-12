const express = require('express');

/**
 * Classe responsável por iniciar a aplicação.
 * 
 * @author Cauê dos Santos Silva <cauesantos@unidavi.edu.br>
 * @since  11/09/2019
 */
class App {

    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(require('./routes'));
    }
}

module.exports = new App().server;