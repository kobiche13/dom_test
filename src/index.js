import Interface from '../src/js/UI'
import './css/main.css'
import {variable} from '../src/js/variable'
import ValidateCard from '../src/js/validateCard'

variable.input.addEventListener("input", (event) => {
    const app = new Interface()
    app.identifyPaymentSystem()
});

variable.btnInput.addEventListener("click", (event) =>{
    const lunh = new ValidateCard()
    lunh.checkCardNumber()
    variable.validateContainer.style.display = 'flex'
    if (lunh.result == 'validate'){
        variable.validateImg.style.backgroundPosition = 'left'
        variable.validateText.textContent = 'validate'
    } else {
        variable.validateImg.style.backgroundPosition = 'right'
        variable.validateText.textContent = 'not validate'
    }
})