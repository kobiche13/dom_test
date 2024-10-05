import {variable} from './variable'
import PaymentSystem from './checkPaymentSystem'
import {cardSystem} from './variable'

export default class Interface{
    constructor(){
        this.btn = variable.btnInput        
    }

    cahgeInput(){
        this.input = document.querySelector('.form-group__field')
        let checkInput = new PaymentSystem()
        this.input.addEventListener('input', (event) =>{
            checkInput.checkPaymentSystem()
            if(checkInput.keyValue !== undefined){
                variable.cardsItems.forEach ((elem) => elem.style.filter =  "grayscale(1)")
                if(checkInput.keyValue == 'mir'){
                    variable.mir.style.filter =  "grayscale(0)"
                } else if (checkInput.keyValue == 'visa') {
                    variable.visa.style.filter =  "grayscale(0)"
                } else if (checkInput.keyValue == 'master') {
                    variable.master.style.filter =  "grayscale(0)"
                } else if (checkInput.keyValue == 'american') {
                    variable.american.style.filter =  "grayscale(0)"
                } else if (checkInput.keyValue == 'discover') {
                    variable.discover.style.filter =  "grayscale(0)"
                } else if (checkInput.keyValue == 'jsb') {
                    variable.jsb.style.filter =  "grayscale(0)"
                } else if (checkInput.keyValue == 'diners') {
                    variable.diners.style.filter =  "grayscale(0)"
                }
            } else {
                variable.cardsItems.forEach((elem) =>{
                    elem.style.filter = "none"
                })
            }
       })
    }
}
