const fs = require('fs');

const content = process.argv[2];

fs.writeFile('note.txt', content + '\n', err => {
  if (err) {
    console.error(err);
  }
});
