import validator from 'validator';

export default class Contato {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
    this.errors = [];
  }

  init() {
    this.events();
  }

  events() {
    if(!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;
    const nomeInput = el.querySelector('input[name="nome"]');
    const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
    const emailInput = el.querySelector('input[name="email"]');
    const telefoneInput = el.querySelector('input[name="telefone"]');


    if(emailInput.value && !validator.isEmail(emailInput.value)) {
      this.errors.push('E-mail inválido');
    }

    if(!nomeInput.value) {
      this.errors.push('Nome é um campo obrigatório');
    }

    if (!emailInput.value && !telefoneInput.value) {
      this.errors.push('Adicione o e-mail ou o telefone do contato');
    }

    if(this.errors.length > 0) {
      const divMsg = this.form.querySelector('.msg');
      this.errors.forEach(error => {
        const div = document.createElement('div');
        div.className = 'alert alert-danger';
        div.innerHTML = error;
        divMsg.appendChild(div);
      });
      return;
    } else {
      return el.submit();
    };
  }
}
