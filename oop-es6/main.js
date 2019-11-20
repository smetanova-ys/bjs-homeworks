'use strict';

// Задача № 1

class Weapon {
    constructor (name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.primalDurability = this.durability;
    }

    takeDamage(damage) {
        this.durability -= damage;

        if (this.durability >= 0) {
            return this.durability;
        } else {
            return this.durability = 0;
        }
    }

    getDamage() {
        if (this.durability === 0) {
            return 0;
        } else if (this.durability < this.primalDurability * 0.3) {
            return this.attack / 2;
        } else {
            return this.attack;
        }
    }

    isBroken() {
        if (this.durability > 0) {
            return false;
        } else {
            return true;
        }
    }
}

// Экземпляры оружия из таблиц 1 и 2 с проверками.

const arm = new Weapon('Рука', 1, Infinity, 1); // Рука
arm.takeDamage(20);
console.log(arm.durability);
console.log(arm.getDamage());

const bow = new Weapon('Лук', 10, 200, 3); // Лук
bow.takeDamage(20);
console.log(bow.durability);
console.log(bow.getDamage());

const sword = new Weapon('Меч', 25, 500, 1); // Меч
sword.takeDamage(500);
console.log(sword.durability);
console.log(sword.getDamage());
sword.takeDamage(520);
console.log(sword.durability);
console.log(sword.isBroken());

const knives = new Weapon('Нож', 5, 300, 1); // Нож
knives.takeDamage(270);
console.log(knives.durability);
console.log(knives.getDamage());

const staff = new Weapon('Посох', 8, 300, 2); // Посох
staff.takeDamage(150);
console.log(staff.durability);
console.log(staff.getDamage());
console.log(staff.isBroken());

const longBow = new Weapon('Длинный лук', 15, 200, 4); // Длинный лук
const axe = new Weapon('Секира', 27, 800, 1); // Секира
const stormStaff = new Weapon('Посох Бури', 10, 300, 3); // Посох Бури

// Задача № 2

class Arm extends Weapon {
    constructor() {
        super('Рука', 1, Infinity, 1);
    }
}

class Bow extends Weapon {
    constructor() {
        super('Лук', 10, 200, 3);
    }
}

class Sword extends Weapon {
    constructor() {
        super('Меч', 25, 500, 1);
    }
}

class Knives extends Weapon {
    constructor() {
        super('Нож', 5, 300, 1);
    }
}

class Staff extends Weapon {
    constructor() {
        super('Посох', 8, 300, 2);
    }
}

class ImprovedBow extends Bow {
    constructor() {
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

class ImprovedSword extends Sword {
    constructor() {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
}

class ImprovedStaff extends Staff {
    constructor() {
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}

const arm1 = new Arm();
console.log(arm1.name);
console.log(arm1.attack);
console.log(arm1.durability);
console.log(arm1.range);

const longBow1 = new ImprovedBow();
console.log(longBow1.name);
console.log(longBow1.attack);
console.log(longBow1.durability);
console.log(longBow1.range);
console.log(longBow1.takeDamage(180));
console.log(longBow1.getDamage());
console.log(longBow1.isBroken());

// Задача № 3

class StudentLog {

    constructor(name) {
        this.name = name;
        this.report = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {

        if (!this.report[subject]) {
            this.report[subject] = [];
        }

        if (grade > 0 && grade < 6) {
            this.report[subject].push(grade);
            return this.report[subject].length;
        } else {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
            return this.report[subject].length;
        }
        
      }

      getAverageBySubject(subject) {
          let sum = 0;

          if (!this.report[subject] || this.report[subject].valueOf() == false) {
              return 0;
          } else {
              let marks = this.report[subject];
              for (let i = 0; i < marks.length; i++) {
                  sum += marks[i];
              }
              return sum / marks.length;
          }
      }

      getTotalAverage() {
        let total = 0;
        let amount = 0;

        for (let item in this.report) {
            total += this.getAverageBySubject(item);
            if (this.getAverageBySubject(item) > 0) {
                amount += 1;
            }
        }  
        let totalAverage = total / amount;
        return totalAverage;
      }
  }
  
  let log = new StudentLog('Олег Никифоров');
  console.log(log.getName());
  console.log(log.addGrade('отлично', 'math'));
  console.log(log.addGrade(25, 'geometry'));
  
  log.addGrade(2, 'algebra');
  log.addGrade(4, 'algebra');
  log.addGrade(5, 'geometry');
  log.addGrade(4, 'geometry');
  console.log(log.report);
  
  console.log(log.getAverageBySubject('geometry'));
  console.log(log.getAverageBySubject('algebra'));
  console.log(log.getAverageBySubject('math'));
  
  console.log(log.getTotalAverage());