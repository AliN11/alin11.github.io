async function getUsers() {
  const url = 'https://randomuser.me/api/?inc=name,picture&results=48';

  try {
    const request = await fetch(url);
    const result = await request.json();

    const users = result.results;

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
  } catch (error) {
    console.log(error);
  }


}

getUsers();
