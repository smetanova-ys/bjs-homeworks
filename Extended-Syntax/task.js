'use strict';

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let d = b ** 2 - 4 * a * c;
    let arr = [];

    if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        arr.push(x1);
        arr.push(x2);
    } else if (d == 0) {
        let x = (-b + d) / (2 * a);
        arr.push(x);
    } 
    return arr;
    // код для задачи №1 писать здесь
    //return x;
}

let result = getResult(2, 4, -3);
console.log(result);

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let sum = 0;
    let averageMark;
    if (marks.length > 5) {
        console.log('Вы ввели больше пяти оценок');
        let marks2 = marks.slice(0, 5);
    
        for (let i = 0; i < marks2.length; i++) {
            sum = sum + marks2[i];
        }
        averageMark = sum / marks2.length;
    } else {
        for (let i = 0; i < marks.length; i++) {
            sum = sum + marks[i];
        }
        averageMark = sum / marks.length;
    }
    return averageMark;
    // код для задачи №2 писать здесь
    //return averageMark;
}


function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name, dateOfBirthday) {
    let year = new Date().getFullYear();
    let yearOfBirth = dateOfBirthday.getFullYear();
    let age = year - yearOfBirth;
    let result;

    if (age < 18) {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    } else {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    }
    console.log(result);
    return result;

    // код для задачи №3 писать здесь
    //console.log(result)
    //return result;
}