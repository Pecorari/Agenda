import 'core-js/stable';
import 'regenerator-runtime/runtime';
import LoginCadastro from './modules/LoginCadastro';
import Contato from './modules/Contato';

const cadastro = new LoginCadastro('.form-cadastro');
const login = new LoginCadastro('.form-login');

login.init();
cadastro.init();

const contato = new Contato('.form-contato');

contato.init();
