'use strict';

const actualTime = () => new Date().toLocaleTimeString('ru-RU', {hour: 'numeric', minute: 'numeric', timeZone: 'Europe/Moscow', hour12: false});

function setAlarm(time, callback) {
    return function() {
      let now = actualTime();
      if (now === time) {
        return callback();
      }
    }
}

function setDailyRhythm(wakeUpTime, bedTime) {
  const goodMorning = () => console.log('Доброе утро, Вася!');
  const goodNight = () => console.log('Спокойной ночи, Вася.');

  let morningAlarm = setAlarm(wakeUpTime, goodMorning);
  let eveningAlarm = setAlarm(bedTime, goodNight);

  setInterval(morningAlarm, 1000);
  setInterval(eveningAlarm, 1000);
  
  console.log(actualTime());
}

setDailyRhythm('11:15', '11:20');