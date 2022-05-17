function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log('Five minutes converted into seconds is:', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}

console.log('The greeting function says:', greet('Beavis'));

function getArea(height, width) {
  return height * width;
}

console.log('The area is:', getArea(17, 42));

var person = {
  firstName: 'Lelouche',
  lastName: 'Lamperouge'
};

function getFirstName(person) {
  return person.firstName;
}

console.log('The first name of the person is:', getFirstName(person));

var array = ['propane', 'and', 'propane', 'accessories'];

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('The last element in the array is:', getLastElement(array));
