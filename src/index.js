/* eslint-disable no-unused-vars */
const saveEl = document.getElementById('save-el');
const countEl = document.getElementById('count-el');
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  const countStr = `${count} - `;
  saveEl.textContent += countStr;
}

// let name = 42;
// let greeting = 'Hi, my name is ';

// let myGreeting = greeting + name;

// console.log(myGreeting);

// console.log(greeting + " " + name);

// let points = 4;
// let bonusPoints = '10';

// let totalPoints = points + bonusPoints;

// console.log(totalPoints);

// let points = 4;
// let bonusPoints = 5;

// let totalPoints = points + bonusPoints;

// console.log(totalPoints);

// let points = '2';
// let bonusPoints = '4';

// let totalPoints = points + bonusPoints;

// console.log(totalPoints);

// let points = '5';
// let bonusPoints = 1;

// let totalPoints = points + bonusPoints;

// console.log(totalPoints);

// let points = 100;
// let bonusPoints = '100';

// let totalPoints = points + bonusPoints;

// console.log(totalPoints);

// let welcomeEl = document.getElementById('welcome-el');

// let name = 'Fatima zahir';
// let greeting = 'Welcome Back ';

// welcomeEl.innerText = greeting + name;

// welcomeEl.innerText += "👋"
