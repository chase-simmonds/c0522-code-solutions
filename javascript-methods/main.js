var num1 = 69;
var num2 = 420;
var num3 = 30;

var maximumValue = Math.max(num1, num2, num3);
console.log('The max value is:', maximumValue);

var heroes = ['Kick-Ass', 'Batman', 'Superman', 'Spiderman'];

var randomNumber = Math.random();
console.log('The random number is:', randomNumber);

randomNumber = (randomNumber * heroes.length);
console.log('The random number is now:', randomNumber);

var randomIndex = Math.floor(randomNumber);
console.log('The random index is:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('The random hero is', randomHero);

var library = [{
  title: 'Green Eggs and Ham',
  author: 'Dr. Suess'
}, {
  title: 'Corduroy',
  author: 'Don Freeman'
}, {
  title: 'The Rainbow Fish',
  author: 'Marcus Pfister'
}];

var lastBook = library.pop();
console.log('The last book is:', lastBook);

var firstBook = library.shift();
console.log('The first book is:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log('Library:', library);

var fullName = 'Chase Simmonds';

var firstAndLastName = fullName.split(' ');
console.log('My first and last name is:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Say my name:', sayMyName);
