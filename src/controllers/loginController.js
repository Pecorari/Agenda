const Login = require('../models/CadastroLoginModel');

exports.index = (req, res) => {
  if (req.session.user) return res.render('logado');
  return res.render('login');
};

exports.login = async function(req, res) {
  try {
    const login = new Login(req.body);
    await login.login();

    if(login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function() {
        return res.redirect('back');
      });
      return;
    }

    req.flash('success', 'Bem-vindo a sua Agenda!');
    req.session.user = login.user;
    req.session.save(function() {
      return res.redirect('back');
    });
  } catch (e) {
    console.log(e);
    return res.render('404');
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};
