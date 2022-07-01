const data = require('./data.json');
const fs = require('fs');

const command = process.argv[2];
const input = process.argv[3];
const updateEntry = process.argv[4];

if (command === 'read') {
  for (var property in data.notes) {
    console.log(`${property}: ${data.notes[property]}`);
  }
} else if (command === 'create') {
  data.notes[data.nextId] = input;
  data.nextId++;
} else if (command === 'update') {
  data.notes[input] = updateEntry;
} else if (command === 'delete') {
  delete data.notes[input];
}

const prettyJSON = JSON.stringify(data, null, 2);

fs.writeFile('data.json', prettyJSON + '\n', err => {
  if (err) throw err;
});
