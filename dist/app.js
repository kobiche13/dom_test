(()=>{"use strict";const e={input:document.querySelector(".form-group__field"),btnInput:document.querySelector(".form-group__btn"),cardsItems:document.querySelectorAll(".cards__item"),visa:document.querySelector(".visa"),master:document.querySelector(".master"),american:document.querySelector(".americanexp"),discover:document.querySelector(".discover"),jsb:document.querySelector(".jcb"),diners:document.querySelector(".diners"),mir:document.querySelector(".mir")},r={visa:["4"],master:["51","52","53","54","55"],american:["34","37"],discover:["6011"],jsb:["35"],diners:["30","36","38","39"],mir:["22"]};class t{constructor(){this.keyValue=void 0}checkPaymentSystem(){this.numberCard=document.querySelector(".form-group__field");let e=this.numberCard.value.split("",4),t="",s=this;e.forEach((function(e,c){t+=e,Object.keys(r).find((e=>r[e].forEach((function(r){r==t&&(s.keyValue=e)}))))}))}}class s{constructor(){this.btn=e.btnInput}cahgeInput(){this.input=document.querySelector(".form-group__field");let r=new t;this.input.addEventListener("input",(t=>{r.checkPaymentSystem(),void 0!==r.keyValue?(e.cardsItems.forEach((e=>e.style.filter="grayscale(1)")),"mir"==r.keyValue?e.mir.style.filter="grayscale(0)":"visa"==r.keyValue?e.visa.style.filter="grayscale(0)":"master"==r.keyValue?e.master.style.filter="grayscale(0)":"american"==r.keyValue?e.american.style.filter="grayscale(0)":"discover"==r.keyValue?e.discover.style.filter="grayscale(0)":"jsb"==r.keyValue?e.jsb.style.filter="grayscale(0)":"diners"==r.keyValue&&(e.diners.style.filter="grayscale(0)")):e.cardsItems.forEach((e=>{e.style.filter="none"}))}))}}window.addEventListener("load",(()=>{(new s).cahgeInput()}))})();