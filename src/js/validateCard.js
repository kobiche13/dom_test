import {variable} from './variable'

export default class ValidateCard {
    constructor(){
        this.numberCard = variable.input.value,
        this.resultLuhn = undefined
        this.result = undefined
        
    }

    checkCardNumber(){
        let numberCard = document.querySelector('.form-group__field').value
        this.arrayNamberCard = numberCard.split('')
        let checkNumberArray = []
        this.arrayNamberCard.forEach(function(item, index){
            let luhnValue
            let checkNumberValue
            if (index % 2 == 0){
                luhnValue = item * 2
                checkNumberValue = (luhnValue > 9 ? luhnValue - 9 : luhnValue)
            } else {
                checkNumberValue = item
            }
            checkNumberArray.push(checkNumberValue)
        })
        this.resultLuhn = checkNumberArray.join('')
        this.checkSumResultLuhn()
    }

    checkSumResultLuhn(){
        this.checkArray = this.resultLuhn.split('')
        this.checkArray = this.checkArray.map(Number)
        let sum = this.checkArray.reduce((acc, number) => acc + number)
        sum % 10 == 0 ? this.result = 'validate' : this.result = 'not validate'
    }
}
