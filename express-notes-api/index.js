const express = require('express');
const app = express();
const dataJSON = require('./data.json');
const notes = dataJSON.notes;
const fs = require('fs');

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const id in notes) {
    notesArray.push(notes[id]);
  }
  res.send(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id <= 0) {
    res.status(400).send({ error: 'id must be positive integer' });
  } else if (notes[id]) {
    res.status(200).json(notes[id]);
  } else {
    res.status(404).send({ error: 'cannot find note with id ' + id });
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).send({ error: 'content is a required field' });
  } else {
    const userEntry = {
      content: req.body.content,
      id: dataJSON.nextId
    };
    notes[dataJSON.nextId] = userEntry;
    dataJSON.nextId++;
    const prettyJSON = JSON.stringify(dataJSON, null, 2);
    fs.writeFile('data.json', prettyJSON, 'utf-8', err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error occurred' });
      } else {
        res.status(201).send(userEntry);
      }
    });

  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id <= 0) {
    res.status(400).send({ error: 'id must be positive integer' });
  } else if (!notes[id]) {
    res.status(404).send({ error: 'cannot find note with id ' + id });
  } else if (notes[id]) {
    // placeholder
  }
});

app.listen(3000, () => {
  // console.log('Listening on port 3000!');
});
