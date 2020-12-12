(function() {
  const imagesPaths = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
  ];

  let images = '';
  for (let i = 0; i < imagesPaths.length; i++) {
    let className = '';
    if (i === 0) {
      className = 'active'
    }

    images = images + '<img src="' + imagesPaths[i] + '" class="' + className + '">';
  }

  const container = document.createElement('div');
  container.innerHTML = images
  container.classList.add('images');
  document.getElementById('slider').appendChild(container)

  document.getElementById('next').onclick = function() {
    const activeImage = document.getElementsByClassName('active')[0]
    activeImage.classList.remove('active')
    const nextImage = activeImage.nextSibling;

    if (nextImage !== null) {
      nextImage.classList.add('active')
    } else {
      document.getElementsByClassName('images')[0].firstChild.classList.add('active')
    }
  }

  document.getElementById('previous').onclick = function() {
    const activeImage = document.getElementsByClassName('active')[0]
    activeImage.classList.remove('active')
    const previousImage = activeImage.previousSibling;

    if (previousImage !== null) {
      previousImage.classList.add('active')
    } else {
      document.getElementsByClassName('images')[0].lastChild.classList.add('active')
    }
  }
}())
