//Переменные
const buttonStart = document.querySelector('.start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('.time-list')
let time = 0
let score = 0
const timeElement = document.querySelector('#time')
const board = document.querySelector('.board')

//Слушатели событий
buttonStart.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

//Функция начала игры
function startGame() {
    setInterval(changeTime, 1000)
    createRandomCircle()
    setTime(time)
}
//Функция изменения времени
function changeTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }

}
//Функция получения выбранного игроком времени
function setTime(value) {
    timeElement.innerHTML = `00:${value}`
}

//Функция завершения игры
function finishGame() {
    timeElement.parentNode.remove()
    board.innerHTML = `<h1>Cчет: <span class="primary">${score} </span></h1>`
}

//Функция выбора случайного цвета
function getRandomColor() {

    let red = Math.round((Math.random() * 255) + 1)
    let green = Math.round((Math.random() * 255) + 1)
    let blue = Math.round((Math.random() * 255) + 1)
    let color = `rgb(${red},${green},${blue})`
    console.log(color)
    return color

}

//Функция создания круга случайного размера
function createRandomCircle() {
    const circle = document.createElement('div')
    let circleColor = getRandomColor()
    const size = getRandomNumber(10, 60)
    const { width, height } = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.backgroundColor = `${circleColor}`
    board.append(circle)
}

//Функция получения случайного числа
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}