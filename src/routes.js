const { Router } = require('express');
const ClienteController = require('./controllers/ClienteController');

/**
 * Classe responsável por criar as rotas da aplicação
 * 
 * @author Cauê dos Santos Silva <cauesantos@unidavi.edu.br>
 * @since  06/09/1019
 */
class Routes {

    constructor() {
        this.routes = new Router();

        this.get();
        this.post();
        this.put();
        this.delete();
    }

    get() {
        this.routes.get('/clientes', ClienteController.index);
    }

    post() {
        this.routes.post('/cliente', ClienteController.store);
    }

    put() {
        this.routes.put('/cliente/:id', ClienteController.update);
    }

    delete() {
        this.routes.delete('/cliente/:id', ClienteController.delete);
    }
}

module.exports = new Routes().routes;