document.getElementsByTagName('button')[0].onclick = function() {
    const colors = ['#1abc9c', '#e67e22', '#2c3e50', '#8e44ad', '#95a5a6', '#f1c40f', '#fd79a8', '#00cec9', '#fdcb6e', '#ff5252']

    const randomIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomIndex];

    document.getElementsByTagName('body')[0].style.backgroundColor = color
}
