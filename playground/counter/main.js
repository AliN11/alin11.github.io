document.querySelector('.increase').onclick = function() {
  let oldNumber = document.getElementById('number').innerHTML;
  oldNumber = parseInt(oldNumber);
  oldNumber = oldNumber + 1;

  document.getElementById('number').innerHTML = oldNumber;
}

document.querySelector('.decrease').onclick = function() {
  let oldNumber = document.getElementById('number').innerHTML;
  oldNumber = parseInt(oldNumber);
  oldNumber = oldNumber - 1;

  document.getElementById('number').innerHTML = oldNumber;
}