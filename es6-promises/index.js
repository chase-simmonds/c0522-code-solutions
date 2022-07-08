const takeAChance = require('./take-a-chance');

const promise1 = takeAChance('Chase');

promise1.then(message => {
  console.log(message);
});

promise1.catch(error => {
  console.error(error.message);
});
