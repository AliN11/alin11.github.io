class JumpInputs {
  constructor(el, config) {
    const container = document.querySelector(el);
    this.container = container;
    this.config = config;

    container.addEventListener('keypress', event => {
      if (event.target.tagName === 'INPUT') {
        if (event.target.value.length >= config.inputLength) {
          event.returnValue = false;
        }
      }
    });

    container.addEventListener('keyup', event => {
      if (event.target.tagName === 'INPUT') {
        const value = event.target.value;

        if (event.key !== 'Backspace' && value.length === config.inputLength) {
          const currentOrderId = parseInt(event.target.getAttribute('data-order'));
          const nextElement = container.querySelector(`input[data-order="${currentOrderId + 1}"]`);

          if (nextElement !== null) {
            nextElement.focus();
          } else {
            if (this.isFinished()) {
              if (config.onFinish) {
                config.onFinish();
              }
            }
          }
        }
      }
    });

    container.addEventListener('keydown', event => {
      if (event.target.tagName === 'INPUT' && event.key === 'Backspace') {
        const value = event.target.value;

        if (value.length === 0) {
          const currentOrderId = parseInt(event.target.getAttribute('data-order'));
          const previousElement = container.querySelector(`input[data-order="${currentOrderId - 1}"]`);

          if (previousElement !== null) {
            previousElement.focus();
          }
        }
      }
    });
  }

  isFinished() {
    const inputs = this.container.querySelectorAll('input');
    const emptyInputs = Array.from(inputs).filter(input => {
      return input.value === '';
    });

    return emptyInputs.length === 0;
  }
}

new JumpInputs('.container', {
   inputLength: 4,
   onFinish() {
     console.log('Finished!');
   }
});
