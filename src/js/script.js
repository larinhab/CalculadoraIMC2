
import './utilis.js'
import { Modal } from './utilis.js'

import { alertError } from './alert.js'

import {calculateIMC, notNuber} from './modul.js'

// váriaveis
const form = document.querySelector('form')

const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


    form.onsubmit = event => {
        event.preventDefault()
    
        const weight = inputWeight.value
        const height = inputHeight.value

        const weightOrHeightIsNotANumber = notNuber(height) || notNuber(weight)


        if(weightOrHeightIsNotANumber){
            alertError.open()
            return;
        }

        alertError.close()

        const result = calculateIMC(weight, height)
        displayResultMessage(result)

        inputWeight.value = ""
        inputHeight.value = ""

    }; 

function displayResultMessage(result){
    const message = `Seu IMC é de: ${result}`
    Modal.message.innerText = message
    Modal.open()
}   

inputHeight.oninput = () => alertError.close()
inputWeight.oninput = () => alertError.close()

// ou poderia ser: 
//   input.onclick = function () {
//   alertError.close()
// }