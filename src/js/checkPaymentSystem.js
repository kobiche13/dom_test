
import {cardSystem} from './variable'

export default class PaymentSystem {
    constructor(){
      this.keyValue = undefined
    }

    checkPaymentSystem(){
        this.numberCard = document.querySelector('.form-group__field')
        let checkNumberCard = this.numberCard.value.split('', 4)
        let sum = ''
        let self = this
        checkNumberCard.forEach(function(item){
            sum += item
            Object.keys(cardSystem).find( i => cardSystem[i].forEach(function(value){
              if (value == sum){
                self.keyValue = i
              }
            }))
        })

    }
}

