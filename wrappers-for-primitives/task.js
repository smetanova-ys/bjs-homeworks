'use strict';

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let P = 1 / 100 / 12 * percent;

    for (let arg in arguments) {
        
        if (typeof parseInt(arg) !== 'number') {     
            console.log(`Параметр ${arg} содержит неправильное значение.`);
        }   
        
        if (arguments[arg] !== 'number') {
            let value = arguments[arg];
            arg = parseInt(value);
        }
    }
    let months = Math.round((new Date(date).getTime() - Date.now()) / (1000 * 60 * 60 * 24 *30));

    let totalAmount = ((amount - contribution) * (P + P / (((1 + P) ** months) - 1))) * months;
    console.log(totalAmount);
    return totalAmount.toFixed(2);
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    
    if (name === 'null' || Boolean(name) === false || name === 'undefined') {
        name = 'Аноним';
    }
    return `Привет, мир! Меня зовут ${name}.`;
}