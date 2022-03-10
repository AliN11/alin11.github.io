const comments = [
  {
    name: 'Mario',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At.',
    children: [
      {
        name: 'Emily',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, velit iste architecto placeat doloribus repellat! Asperiores numquam ratione voluptatum reiciendis?',
        children: [
          {
            name: 'Mario',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, necessitatibus?',
            children: [
              {
                name: 'Emily',
                text: 'Lorem, ipsum dolor.',
                children: [],
              },
            ],
          },
          {
            name: 'David',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, necessitatibus?',
            children: [],
          },
        ]
      }
    ],
  },
  {
    name: 'John',
    text: 'Lorem ipsum dolor sit amet.'
  }
];

function renderComments(comments) {
  let output = '';

  for (const comment of comments) {
    const name = `<b>${comment.name}</b>`;
    const text = `<p>${comment.text}</p>`;
    let children = '';

    if (Array.isArray(comment.children) && comment.children.length > 0) {
      children = renderComments(comment.children);
    }

    output += `<li>${name}${text}${children}</li>`;
  }

  return `<ul>${output}</ul>`;
}

document.querySelector('.comments-container').innerHTML = renderComments(comments);