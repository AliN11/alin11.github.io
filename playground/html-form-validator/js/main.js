class Validator {
  hasErrors = false;
  invalidElements = [];

  definedRules = {
    required: (input) => {
      if (input.value.trim() !== '') {
        return true;
      }

      this.hasErrors = true;
      this.invalidElements.unshift({
        input,
        message: 'This field is required'
      });
    },
    min: (input, value) => {
      if (input.value.length >= parseInt(value)) {
        return true;
      }

      this.hasErrors = true;
      this.invalidElements.unshift({
        input,
        message: 'The minimum length for this field is ' + value
      });
    }
  }

  constructor(form) {
    form = document.querySelector(form);
    this.form = form;

    form.onsubmit = (e) => {
      this.hasErrors = false;
      this.invalidElements = [];
      this.removeErrors();

      const inputs = form.querySelectorAll('[data-rules]');

      for (const input of inputs) {
        const givenRules = input.getAttribute('data-rules').split('|');

        for (const givenRule of givenRules) {
          let rule = givenRule;
          let args = null;

          if (givenRule.indexOf(':') > -1) {
            const splittedRule = givenRule.split(':');
            rule = splittedRule[0];
            args = splittedRule[1];
          }

          if (this.definedRules.hasOwnProperty(rule)) {
            this.definedRules[rule](input, args);
          }
        }
      }

      if (this.hasErrors) {
        e.preventDefault();

        for (const error of this.invalidElements) {
          const message = document.createElement('p');
          message.classList.add('validator-err');
          message.innerHTML = error.message;

          const input = error.input;
          input.parentNode.insertBefore(message, input.nextSibling);
        }
      }
    }
  }

  removeErrors() {
    const errors = this.form.querySelectorAll('p.validator-err');

    errors.forEach(error => {
      error.remove();
    })
  }
}

new Validator('#my-form');