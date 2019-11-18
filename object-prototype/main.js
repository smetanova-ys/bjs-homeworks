'use strict';

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = Date.now();
    let dateOfbirth = Number(new Date(birthday));
    let diff = now - dateOfbirth;
    let age = diff / (1000 * 60 * 60 * 24 * 365.25);
    
        return age >= 18;
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {

    if (animal.valueOf() === 'undefined') {
        return null;
    } else {
        let sound = animal.sound;
        return sound;
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let average;
    let sum = 0;
    
    for (let i = 0; i < marks.length; i++) {
        sum += parseInt(marks[i]);
    }
    average = sum / marks.length;

    return Math.round(average);
}