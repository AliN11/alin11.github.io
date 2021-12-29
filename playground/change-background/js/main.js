const colors = [
  'crimson',
  'deeppink',
  'deepskyblue',
  'gold',
  'lightgrey',
  'pink',
  'orange',
  'mediumturquoise',
  'lemonchiffon',
  'indigo',
];

function setColor(color) {
  document.body.style.backgroundColor = color;
  document.querySelector('#current-color').innerHTML = color;

  const currentActiveButton = document.querySelector('button.active');

  if (currentActiveButton !== null) {
    currentActiveButton.classList.remove('active');
  }

  document.querySelector(`button[data-color=${color}]`).classList.add('active');
}

colors.forEach(color => {
  const button = document.createElement('button');
  button.style.backgroundColor = color;
  button.setAttribute('data-color', color);

  button.onclick = function () {
    setColor(color);
  }

  document.querySelector('div.colors').appendChild(button);
});

document.body.onload = function () {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomIndex];

  setColor(color);
}
