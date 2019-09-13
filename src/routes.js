const { Router } = require('express');

const ClienteController = require('./controllers/ClienteController');
const VeiculoController = require('./controllers/VeiculoController');

/**
 * Classe responsável por criar as rotas da aplicação
 * 
 * @author Cauê dos Santos Silva <cauesantos@unidavi.edu.br>
 * @since  06/09/1019
 */
class Routes {

    constructor() {
        this.routes = new Router();

        this.loadRotasClientes();
        this.loadRotasVeiculos();
    }

    loadRotasClientes() {
        this.routes.get('/clientes', ClienteController.index);
        this.routes.get('/cliente/:id', ClienteController.getCliente);
        
        this.routes.post('/cliente', ClienteController.store);

        this.routes.put('/cliente/:id', ClienteController.update);
        
        this.routes.delete('/cliente/:id', ClienteController.delete);
    }

    loadRotasVeiculos() {
        this.routes.get('/veiculos', VeiculoController.all);
        this.routes.get('/veiculo/:id', VeiculoController.getVeiculo);

        this.routes.post('/veiculo', VeiculoController.insert);

        this.routes.put('/veiculo/:id', VeiculoController.update);

        this.routes.delete('/veiculo/:id', VeiculoController.delete);
    }
}

module.exports = new Routes().routes;