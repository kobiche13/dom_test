export const variable = {
    input : document.querySelector('.form-group__field'),
    btnInput : document.querySelector('.form-group__btn'),
    cardsItems: document.querySelectorAll('.cards__item'),
    visa : document.querySelector('.visa'),
    master : document.querySelector('.master'),
    american : document.querySelector('.americanexp'),
    discover : document.querySelector('.discover'),
    jsb : document.querySelector('.jcb'),
    diners : document.querySelector('.diners'),
    mir : document.querySelector('.mir'),
    validateImg: document.querySelector('.validate__result-img'),
    validateText: document.querySelector('.validate__result-text'),
    validateContainer: document.querySelector('.validate__result')
}

export const cardSystem = {
    visa : ['4'],
    master : ['51', '52', '53', '54', '55'],
    american : ['34', '37'],
    discover : ['6011'],
    jsb : ['35'],
    diners : ['30', '36', '38', '39'],
    mir : ['22']
}