var student = {
  firstName: 'Chase',
  lastName: 'Simmonds',
  age: 30
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('The value of fullName is:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Account Executive';

console.log('The value of livesInIrvine is:', student.livesInIrvine);
console.log('The value of previousOccupation is:', student.previousOccupation);

var vehicle = {
  make: 'Porsche',
  model: 'Carrera GT',
  year: 2005
};

vehicle['color'] = 'gray';
vehicle['isConvertible'] = false;

console.log('The value of vehicle color is:', vehicle['color']);
console.log('The value of isConvertible is:', vehicle['isConvertible']);

console.log('The value of vehicle is:', vehicle);

var pet = {
  name: 'Shmitaltaaven',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log('The value of pet is:', pet);
