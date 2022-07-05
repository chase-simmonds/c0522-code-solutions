const express = require('express');
const app = express();

let nextId = 1;
const grades = {};
const gradesArray = [];

app.get('/api/grades', (req, res) => {
  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const userGrades = req.body;
  userGrades.id = nextId;
  grades[nextId] = userGrades;
  res.status(201).send(userGrades);
  nextId++;
});

app.listen(3000, () => {
  // console.log('listening on port 3000');
});
