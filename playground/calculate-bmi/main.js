const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  document.querySelector('.result').innerHTML = ''

  let height = document.getElementById('height').value;
  let weight = document.getElementById('weight').value;

  if (height === '' || weight === '') {
    alert('لطفاً همه ورودی‌ها را وارد کنید.');
    return false;
  }

  height = parseInt(height);
  weight = parseInt(weight);

  if (isNaN(height) || isNaN(weight)) {
    alert('قد و وزن باید عددی باشند');
    return false;
  }

  if (height < 0 || weight < 0) {
    alert('قد و وزن باید بزرگتر از صفر باشد.');
    return false;
  }

  height = height / 100;
  let result = weight / (height * height)
  result = result.toFixed(2)

  document.querySelector('.result').innerHTML = "BMI شما برابر است با: <br>" + result
});
