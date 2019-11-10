'use strict';

console.log('Задача № 1');
function getSolutions(a, b, c) {
    let d = b ** 2 - 4 * a * c;
    let solution = {};

    if (d < 0) {
        solution.D = d;
    } else if (d == 0) {
        let x1 = -b / (2 * a);
        solution.roots = [x1];
        solution.D = d;
    } else {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        solution.roots = [x1, x2];
        solution.D = d;
    }
    return solution;
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x^2 + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.D == 0) {
        console.log(`Уравнение имеет один корень Х1 = ${result.roots[0]}`);
    } else {
        console.log(`Уравнение имеет два корня Х1 = ${result.roots[0]}, X2 = ${result.roots[1]}`);
    }
}
showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

console.log('Задача № 2');
let data = {
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 5],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
}

function getAverageScore(data) {
    let mean = [];
    let total = 0;

    for (let item in data) {
        let value = data[item];
        data[item] = getAverageSabject(value);
        mean.push(getAverageSabject(value));
    }

    for (let i = 0; i < mean.length; i++) {
        total += mean[i];
    }
    data.average = total / mean.length;
    return data;
}

function getAverageSabject(value) {
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
        sum += value[i];
    }
    return sum / value.length;
}

console.log(getAverageScore(data));

console.log('Задача № 3');

function getPersonData(secretData) {
    let personData = {};
    
     for (let title in secretData) {
        let codeOfName = secretData[title];

        if (title == 'aaa') {
            personData.firstName = getName(codeOfName);
        } else if (title == 'bbb') {
            personData.lastName = getName(codeOfName);
        }
     }

    return personData;
}

function getName (codeOfName) {
    let name;

    name = (codeOfName == 0) ? 'Родриго' : 'Эмильо';

    return name;
}

console.log(getPersonData({aaa: 0, bbb: 0}));
console.log(getPersonData({aaa: 1, bbb: 0}));
console.log(getPersonData({aaa: 0, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 1}));