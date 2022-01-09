function Modal(config) {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  // Modal container
  const container = document.createElement('div');
  container.classList.add('modal-container');

  // Modal header
  const header = document.createElement('div');
  header.classList.add('header');
  header.innerHTML = config.title;
  container.appendChild(header);

  // Close button
  const closeButton = document.createElement('button');
  closeButton.innerHTML = '&times;';
  header.appendChild(closeButton);
  closeButton.onclick = function () {
    modal.remove();
  }

  // Modal Body
  const body = document.createElement('div');
  body.classList.add('body');
  let bodyContent;
  if (config.body instanceof HTMLElement) {
    bodyContent = config.body.innerHTML;
  } else {
    bodyContent = config.body;
  }

  body.innerHTML = bodyContent;
  container.appendChild(body);


  // Modal background
  const background = document.createElement('div');
  background.classList.add('background');
  modal.appendChild(background);
  background.onclick = () => {
    modal.remove();
  }

  modal.appendChild(container);
  document.body.appendChild(modal);

  const hideModalByEscape = (e) => {
    if(e.key === "Escape") {
      modal.remove();
      document.removeEventListener('keyup', hideModalByEscape);
    }
  }

  document.addEventListener('keyup', hideModalByEscape);
}


document.querySelector('#modal-1').onclick = function () {
  Modal({
    title: "Welcome",
    body: document.querySelector('.modal-content'),
  });
}

document.querySelector('#modal-2').onclick = function () {
  Modal({
    title: "Are you sure?",
    body: "Please accept cookies before using this website!",
  });
}
