//Переменные
const board = document.querySelector('#board');
const squaresNumber = 962;

//Создаем доску с ячейками
for (let i = 0; i < squaresNumber; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

//Добавляем стили при наведении
function setColor(element) {
    let color = getRandomColor()
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}`
}
//Удаляем стили при наведении
function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

//Выбираем случайный цвет
function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let randomColor = `rgb(${red},${blue},${green})`;
    return randomColor;
}
