import validator from 'validator';

export default class LoginCadastro {
  constructor(formClass, divMsgClass) {
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
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');

    if(!validator.isEmail(emailInput.value)) {
      this.errors.push('E-mail inválido');
    }

    if(passwordInput.value.length < 5 || passwordInput.value.length > 30) {
      this.errors.push('Senha precisa ter entre 5 e 30 caracteres');
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
