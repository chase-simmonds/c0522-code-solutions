var width = 50;
var height = 25;

var area = width * height;

console.log('The area is:', area);
console.log('The type of area is a:', typeof area);

var bill = 50;
var payment = 200;

var change = payment - bill;

console.log('Your change is:', change);
console.log('The type of change is a:', typeof change);

var quizzes = 90;
var midterm = 95;
var final = 75;

var grade = ((quizzes + midterm + final) / 3);
console.log('Your final grade is:', grade);
console.log('The type of grade is a:', typeof grade);

var firstName = 'Chase';
var lastName = 'Simmonds';
var fullName = firstName + ' ' + lastName;
console.log('My full name is:', fullName);
console.log('The type of of fullName is:', fullName);

var pH = 9.5;
var isAcidic = pH < 7;
console.log('The pH is acidic:', isAcidic);
console.log('The type of pH is a:', typeof isAcidic);

var headCount = 69;
var isSparta = headCount === 300;
console.log('This is Sparta:', isSparta);
console.log('The type of isSparta is a:', typeof isSparta);

var motto = fullName;
motto = fullName + ' is the GOAT';
console.log('Value of motto:', motto);
console.log('The type of motto is a:', typeof motto);
