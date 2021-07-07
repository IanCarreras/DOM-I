const setStyle = (name, type, styles) => {
    let element = document.querySelector(name)

    for (let property in styles) {
       element.style[property] = styles[property];
    }
}

setStyle('body', 'tag', {
    'flexDirection': 'column'
})

setStyle('.digits', 'class', {
    'border': '1px solid black',
    'borderRadius': '5px',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'width': '30%',
    'height': '10rem',
    'background': 'lightgray',
    'margin': '5rem 0 1rem 0'
})

const body = document.querySelector('body')
const buttonWrapper = document.createElement('div')
const button = document.querySelector('button')

Object.assign(buttonWrapper.style, {
    display: 'flex',
    justifyContent: 'space-between',
    width: '30%',
    height: '2rem',
})

body.appendChild(buttonWrapper)

const start = document.createElement('button')
start.innerText = 'Start'

const resetButton = document.createElement('button')
resetButton.innerText = 'Reset'

let buttons = [start, resetButton]

buttons.forEach(button => Object.assign(button.style, {
    borderRadius: '.3rem',
    width: '10rem',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '1.5rem'
}))

buttonWrapper.appendChild(start)
buttonWrapper.appendChild(resetButton)

const secondTens = document.getElementById('secondTens')
const secondOnes = document.getElementById('secondOnes')
const msHundreds = document.getElementById('msHundreds')
const msOnes = document.getElementById('msTens')
let digits = [secondTens, secondOnes, msHundreds, msOnes]


const timer = () => {
    start.disabled = true
    resetButton.disabled = true
    buttons.forEach(button => Object.assign(button.style, {
        backgroundColor: 'darkgray',
        color: 'lightgray',
    }))
    let tensMS = 0

    let counter = setInterval(() => {
        tensMS++
        let msArray = tensMS.toString().split('')
        msTens.innerText = `${msArray[msArray.length-1]}`
        if(msArray.length < 2) { 
            msHundreds.innerText = '0'
        } else { msHundreds.innerText = `${msArray[msArray.length-2]}`
    }   if(msArray.length < 3) { 
            secondOnes.innerText = '0'
        } else { secondOnes.innerText = `${msArray[msArray.length-3]}` }
        if(msArray.length < 4) { 
            secondTens.innerText = '0'
        } else { 
            secondTens.innerText = `${msArray[msArray.length-4]}`
            digits.forEach(digit => digit.classList.add('redDigit'))
            resetButton.disabled = false
            resetButton.style.backgroundColor = 'black'
            resetButton.style.color = 'white'
        }
        if(tensMS == 1000) {
            clearInterval(counter)
        }
    }, 10)
}

const resetFunction = () => {
    digits.forEach(digit => {
        digit.innerText = '0'
        digit.classList.remove('redDigit')
    })
    start.disabled = false
    start.style.backgroundColor = 'black'
    start.style.color = 'white'
}

start.addEventListener('click', timer)
resetButton.addEventListener('click', resetFunction)