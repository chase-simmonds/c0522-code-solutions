const fs = require('fs');

const copiedFile = process.argv[2];
const pastedFile = process.argv[3];

fs.readFile(copiedFile, 'utf8', readingFile);

function readingFile(error, data) {
  if (error) {
    console.error(error);
  } else {
    fs.writeFile(pastedFile, data, 'utf8', writeFile);
  }
}

function writeFile(error) {
  if (error) {
    console.error(error);
  }
}
