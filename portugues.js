const boxes = document.querySelectorAll(".box")
let s = document.querySelector('#rgbSpan')
let colors = generateRandomColor(6)
let pickedColor = colors[Math.floor(Math.random() * 6)]
s.innerText = pickedColor
const playBtn = document.querySelector("#playAgain")
const easyBtn = document.querySelector("#easyBtn")
const hardBtn = document.querySelector("#hardBtn")
let boxCount = 6
let statusText = document.querySelector('#status')
statusText.innerText = "Vamos Jogar!"

easyBtn.addEventListener('click', function () {
    document.querySelector('h1').style.background = '#D1345B';
    statusText.innerText = "Vamos Jogar!"
    boxCount = 3
    this.style.background = '#D1345B';
    this.style.color = 'white';
    hardBtn.style.background = '#FFC145';
    hardBtn.style.color = '#D1345B';
    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * 3)]
    s.innerText = pickedColor

    for (var i = 0; i < boxes.length; i++) {
        if (colors[i]) {
            boxes[i].style.background = colors[i]

        } else {
            boxes[i].style.display = 'none';
        }
    }
})

hardBtn.addEventListener('click', function() {
    document.querySelector('h1').style.background = '#D1345B';
    statusText.innerText = "Vamos Jogar!"
    boxCount = 6
    this.style.background = '#D1345B';
    this.style.color = 'white';
    easyBtn.style.background = '#FFC145';
    easyBtn.style.color = '#D1345B';
    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * 6)]
    s.innerText = pickedColor

    for (var i = 0; i < boxes.length; i++) {
        
            boxes[i].style.background = colors[i]  
            boxes[i].style.display = 'block';
    }
}) 

playBtn.addEventListener('click', function () {
    document.querySelector('h1').style.background = '#D1345B';
    statusText.innerText = "Vamos Jogar!"
    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * boxCount)]
    s.innerText = pickedColor
    for (var i = 0; i < boxes.length; i++) {
        
        boxes[i].style.background = colors[i] 
    }   
})

for (var i = 0; i < colors.length; i++) {
    boxes[i].style.background = colors[i]
    boxes[i].addEventListener('click', function (){
        let selectedColor = this.style.background
        if (selectedColor === pickedColor) {
            win()
        } else {
            lose(this)
        }

    })
}

function win() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.background = pickedColor

    }

    document.querySelector("h1").style.background = pickedColor
    statusText.innerText = "Acertou!"
}

function lose(a) {
    a.style.background = '#6efdc1'
    statusText.innerText = "Tente De Novo!"
}

function generateRandomColor(num) {
    let arr= []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr
}

function randomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}