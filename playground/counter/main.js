document.querySelector('.increase').onclick = function() {
  let oldNumber = document.getElementById('number').innerHTML;
  oldNumber = parseInt(oldNumber);
  let newNumber = oldNumber + 1;

  document.getElementById('number').innerHTML = newNumber;
}

document.querySelector('.decrease').onclick = function() {
  let oldNumber = document.getElementById('number').innerHTML;
  oldNumber = parseInt(oldNumber);
  let newNumber = oldNumber - 1;

  document.getElementById('number').innerHTML = newNumber;
}
