const body = document.querySelector('body')

body.style.flexDirection = 'column'

const buttonWrapper = document.createElement('div')

buttonWrapper.style.display = 'flex'
buttonWrapper.style.justifyContent = 'space-between' 
buttonWrapper.style.width = '10%'
body.appendChild(buttonWrapper)

const start = document.createElement('button')
start.innerHTML = 'Start'

const reset = document.createElement('button')
reset.innerHTML = 'Reset'

buttonWrapper.appendChild(start)
buttonWrapper.appendChild(reset)

const secondTens = document.getElementById('secondTens')
const secondOnes = document.getElementById('secondOnes')
const msHundreds = document.getElementById('msHundreds')
const msOnes = document.getElementById('msTens')

const timer = () => {
    let tensMS = 0

    let counter = setInterval(() => {
        tensMS++
        let msArray = tensMS.toString().split('')
        msTens.innerHTML = `${msArray[msArray.length-1]}`
        msHundreds.innerHTML = `${msArray[msArray.length-2]}`
        secondOnes.innerHTML = `${msArray[msArray.length-3]}`
        secondTens.innerHTML = `${msArray[msArray.length-4]}`
        if(tensMS == 1000) clearInterval(counter)
    }, 10)
}

timer()