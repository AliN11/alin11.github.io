document.getElementsByTagName('button')[0].onclick = function() {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple']

    const randomIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomIndex];

    document.getElementsByTagName('body')[0].style.backgroundColor = color
}