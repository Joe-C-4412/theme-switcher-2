console.log('Running our script!')

let count = 0;
let countDisplayElement = document.querySelector('#count-display')

function increaseCount() {
    count++
    countDisplayElement.innerText = count
    console.log(count)
}

function decreaseCount() {
    count--
    countDisplayElement.innerText = count
    console.log(count)
}

function resetCount() {
    count = 0
    countDisplayElement.innerHTML = `<mark> ${count} </mark>`
    console.log(count)
}

let decreaseButton = document.getElementById('decrease')
decreaseButton.addEventListener('click', decreaseCount)

let increaseButton = document.getElementById('increase')
increaseButton.addEventListener('click', increaseCount)

let resetButton = document.getElementById('reset')
resetButton.addEventListener('click', resetCount)

let instructionsElement = document.querySelector('#instructions')
instructionsElement.innerText = "Choose your theme:"

function selectTheme(theme){
    document.querySelector('body').className = theme
    document.getElementsByTagName('main')[0].className = theme
    const buttons = document.querySelectorAll('button')
    
    buttons.forEach(e => e.className = theme)

}
//The return values of these methods are different. See Matias's recording at ~ 3:20 in. 

console.log(document.querySelectorAll('button'))
console.log(document.getElementsByTagName('button'))


//console.log(document.getElementsByTagName('main')











// console.log('Our script is running!')

// // console.dir(document)

// // let instructionsElement = document.getElementById('instructions')
// // console.log(instructionsElement)

// let instructionsElement = document.querySelector('#instructions')
// instructionsElement.innerText = 'Choose a theme:'
// // console.log(instructionsElement.className)// this gives us nothing because it has no class names
// // console.log(instructionsElement.classList)
// // console.log(instructionsElement)
// instructionsElement.style.color = 'rebeccapurple'

// //^^ this gives me null without using a selector... like #

// const buttons = document.querySelectorAll('button')
// // console.log(buttons)
// // console.log(buttons[0]) //this is so you can access a spedific element by using [0] which can create problems if you add future buttons etc... 



// function clicked() {
//     console.log('Hit our clicked')
//     alert('Clicked!')
// }

// let faceBookButton = document.getElementById('facebook')
// faceBookButton.addEventListener('click', clicked)



// //see Matias example of Event Bubbling... wow... 