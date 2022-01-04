function calculateBmi(height, weight) {
  height = height / 100;
  let result = weight / (height * height);

  return result.toFixed(2);
}

function clearResult() {
  document.querySelector('#result').innerHTML = '';
}

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  console.log(event);
  event.preventDefault();
  clearResult();

  let height = document.getElementById('height').value;
  let weight = document.getElementById('weight').value;

  if (height.trim() === '' || weight.trim() === '') {
    alert('لطفاً همه ورودی‌ها را پر کنید!');

    return false;
  }

  height = parseInt(height);
  weight = parseInt(weight);

  if (isNaN(height) || isNaN(weight)) {
    alert('قد و وزن باید عددی باشند');

    return false;
  }

  if (weight < 0 || height < 0) {
    alert('قد و وزن باید بزرگتر از صفر باشد.');

    return false;
  }

  document.querySelector('#result').innerHTML = calculateBmi(height, weight);
});


document.querySelector('input#height')
  .addEventListener('keydown', clearResult);

  document.querySelector('input#weight')
  .addEventListener('keydown', clearResult);
