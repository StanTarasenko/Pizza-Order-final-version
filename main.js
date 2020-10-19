let doOrder = document.querySelector('#order');
let fillOutForm = document.querySelector('#fill-out-form');
let cancelOrder = document.querySelector('#cancel');
let massageCancel = document.querySelector('#massageCancel');
let confirmOrder = document.querySelector('#confirm');
let cooking = document.querySelector('#cooking');
let body = document.querySelector('body');
let service = document.querySelector('#service');
let like = document.querySelector('#like');
let dislike = document.querySelector('#dislike');
let checkboxElements = document.querySelectorAll('.checkbox');
let errorMassage = document.querySelector('#alert');
let radioValue = fillOutForm.elements.size.value;
let cheese = document.querySelector('#cheese');
let tomato = document.querySelector('#tomato');
let chicken = document.querySelector('#chicken');
let mushrooms = document.querySelector('#mushrooms');
let sausage = document.querySelector('#sausage');

doOrder.onclick = function () {
    if (!validateCheckbox(checkboxElements)) {
        errorMassage.hidden = false;
        fillOutForm.style.marginBottom = '0px';
        doOrder.removeAttribute('data-toggle')
        return false;
    } else {
        errorMassage.hidden = true;
        fillOutForm.style.marginBottom = '30px';
        doOrder.setAttribute('data-toggle', "modal");
    };

}

cancelOrder.onclick = function () {

    fillOutForm.hidden = true;
    doOrder.hidden = true;
    massageCancel.hidden = false;
    setTimeout(hideCancelOrderShowMassage, 2000)
}

confirmOrder.onclick = function () {

    Order.describeOrder({
        small: radioValue == 'small',
        midle: radioValue == 'midle',
        big: radioValue == 'big',
        cheese: cheese.checked == true,
        tomato: tomato.checked == true,
        chicken: chicken.checked == true,
        mushrooms: mushrooms.checked == true,
        sausage: sausage.checked == true
    })

    fillOutForm.hidden = true;
    doOrder.hidden = true;
    body.classList.add('center')
    setTimeout(cookingShowMassage, 1000);
    setTimeout(travelShowMassage, 3000);
    setTimeout(delivereShowMassage, 6000);
    setTimeout(serviceShowMassage, 9000);

}
like.onclick = function () {

    setTimeout(thankShowMassage, 500);
}
dislike.onclick = function () {
    setTimeout(thankShowMassage, 500);
}

function validateCheckbox(checkboxElements) {
    let valid = true;
    let sum = 0;
    for (let elem of checkboxElements) {
        if (elem.checked == true) {
            sum = sum + 1;
        }
    }
    if (sum < 3) {
        valid = false;
    }
    return valid
}

class Order {
    static store = [];
    constructor({
        small,
        midle,
        big,
        cheese,
        tomato,
        chicken,
        mushrooms,
        sausage
    }) {
        this.small = small,
            this.midle = midle,
            this.big = big,
            this.cheese = cheese,
            this.tomato = tomato,
            this.chicken = chicken,
            this.mushrooms = mushrooms,
            this.sausage = sausage
    }
    static describeOrder(data) {
        Order.setOrder(new Order(data))
    }
    static setOrder(order) {
        console.log(order);
        Order.store.push(order)
        console.log(Order.store)
    }

}

function cookingShowMassage() {
    cooking.hidden = false;
}
function hideCancelOrderShowMassage(){
    massageCancel.hidden=true;
    fillOutForm.hidden = false;
    doOrder.hidden = false;
}
function travelShowMassage() {
    cooking.innerHTML = 'курьер забрал пиццу';
    cooking.style.background = 'orange'
}
function delivereShowMassage() {
    cooking.innerHTML = 'заказ доставлен';
    cooking.style.background = 'green'
}
function serviceShowMassage() {
    cooking.hidden = true;
    service.hidden = false;

}
function thankShowMassage() {
    service.hidden = true;
    body.innerHTML = '<b>Cпасибо за ваш ответ<b>!'
    body.style.color = 'white'
    body.style.fontSize = '28px'
    body.style.fontStyle = 'italic'
}