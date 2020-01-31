const Cadastro = require('../models/CadastroLoginModel');

exports.index = (req, res) => {
  res.render('cadastro');
};

exports.register = async function(req, res) {
  const cadastro = new Cadastro(req.body);
  try {
    await cadastro.register();

    if(cadastro.errors.length > 0) {
      req.flash('errors', cadastro.errors);
      req.session.save(function() {
        return res.redirect('back');
      });
      return;
    }

    req.flash('success', 'Seu usúario foi criado com sucesso!');
    req.session.save(function() {
      return res.redirect('back');
    });
  } catch (e) {
    console.log(e);
    return res.render('404');
  }
};
