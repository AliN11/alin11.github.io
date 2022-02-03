async function getUsers() {
  const cachedUsers = localStorage.getItem('users');
  if (cachedUsers !== null) {
    users = JSON.parse(cachedUsers);
  } else {
    const url = 'https://randomuser.me/api/?inc=name,picture&results=48';
    const request = await fetch(url);
    const result = await request.json();
    users = result.results;
    localStorage.setItem('users', JSON.stringify(users));
  }

  return users;
}

async function showUsers(users = null) {
  document.querySelector('.users').innerHTML = '';

  try {
    if (users === null) {
      users = await getUsers();
    }

    for (const user of users) {
      const {
        name: { title, first, last },
        picture: { large: userPicture }
      } = user;

      const name = `${title} ${first} ${last}`;

      const userContainer = document.createElement('div');
      userContainer.classList.add('col-2');
      userContainer.classList.add('user');

      // Image
      const image = document.createElement('img');
      image.src = userPicture;
      image.setAttribute('alt', name);
      userContainer.appendChild(image);

      // Body
      const body = document.createElement('h3');
      body.innerHTML = name;
      userContainer.appendChild(body);

      document.querySelector('.users').appendChild(userContainer);
    }

    return users;
  } catch (error) {
    console.log(error);
  }


}


(async function () {
  const users = await showUsers();
  let timeout;

  document.querySelector('#filter').addEventListener('keyup', e => {
    window.clearTimeout(timeout);

    timeout = setTimeout(() => {
      const value = e.target.value.toLowerCase();
      const filteredUsers = users.filter(user => {
        const name = `${user.name.title} ${user.name.first} ${user.name.last}`;

        return name.toLowerCase().indexOf(value) > -1;
      });

      showUsers(filteredUsers);
    }, 500);

  });
})();