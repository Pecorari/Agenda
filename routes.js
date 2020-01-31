const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const cadastroController = require('./src/controllers/cadastroController');
const contatoController = require('./src/controllers/contatoController');

const { loginRequired } = require('./src/middleware/middleware');

// Rotas da home
route.get('/', homeController.index);

// Rotas de login
route.get('/login', loginController.index);
route.post('/login/login', loginController.login);
route.get('/logout', loginController.logout);

// Rotas de cadastro
route.get('/cadastro', cadastroController.index);
route.post('/cadastro/register', cadastroController.register);

// Rotas de contato
route.get('/contato', loginRequired, contatoController.index);
route.post('/contato/register', loginRequired, contatoController.register);
route.get('/contato/:id', loginRequired, contatoController.editRegister);
route.post('/contato/edit/:id', loginRequired, contatoController.edit);
route.get('/contato/delete/:id', loginRequired, contatoController.delete);

module.exports = route;
