const container = document.createElement('ol');
document.querySelector('.items').appendChild(container);

let items = localStorage.getItem('todo-items');
items = items === null ? [] : JSON.parse(items);

for (const item of items) {
  createRow(item);
}

document.querySelector('form').onsubmit = (event) => {
  event.preventDefault();
  const value = document.querySelector('form input').value;

  if (value.trim() === "") {
    alert("Value cannot be empty!");
    return;
  }

  const id    = (Math.random() + 1).toString(36).substring(7);
  const data  = { id, value };
  items.push(data);
  sync();
  createRow(data);
}


function createRow(data) {
  const row = document.createElement('li');
  const title = document.createElement('h3');
  title.innerHTML = data.value;
  title.onclick = () => {
    const value = prompt("Enter new value:");
    title.innerHTML = value;
    data.value = value;
    sync();
  }

  // Delete Button
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete');
  deleteButton.onclick = () => {
    if (confirm('Delete this row?')) {
      row.remove();
      items = items.filter(item => item.id !== data.id);
      sync();
    }
  }

  row.appendChild(title);
  row.appendChild(deleteButton);
  container.appendChild(row);
}

function sync() {
  localStorage.setItem('todo-items', JSON.stringify(items));
}