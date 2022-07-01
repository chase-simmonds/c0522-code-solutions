const fs = require('fs');

const copiedFile = process.argv[2];
const pastedFile = process.argv[3];

const readingFile = (error, data) => {
  if (error) {
    console.error(error);
  } else {
    fs.writeFile(pastedFile, data, 'utf8', writeFile);
  }
};

fs.readFile(copiedFile, 'utf8', readingFile);

const writeFile = error => {
  if (error) {
    console.error(error);
  }
};
