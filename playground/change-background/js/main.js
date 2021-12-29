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

colors.forEach(color => {
  const element = document.createElement('button');
  element.setAttribute('data-color', color);
  element.style.backgroundColor = color;
  element.onclick = function () {
    setColor(color);
  }

  document.querySelector('div.colors').appendChild(element);
});


function randomBackgroundColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomIndex];
  setColor(color);
}

function setColor(color) {
  document.body.style.backgroundColor = color;
  document.querySelector('#current-color').innerHTML = color.toUpperCase();

  const activeColor = document.querySelector('div.colors button.active');
  if (activeColor) {
    activeColor.classList.remove('active');
  }

  document.querySelector(`div.colors button[data-color="${color}"]`).classList.add('active');
}

document.body.onload = randomBackgroundColor;
