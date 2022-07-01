const fs = require('fs');

const randomNum = Math.random().toString();

fs.writeFile('random.txt', randomNum + '\n', err => {
  if (err) {
    console.error(err);
  }
});
