const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
    SELECT *
      FROM "grades"
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const userGrade = req.body;
  if (!userGrade.name) {
    res.status(400).json({ error: 'Valid name is required' });
    return;
  } else if (!userGrade.course) {
    res.status(400).json({ error: 'Valid course is required' });
    return;
  } else if (!Number.isInteger(userGrade.score) || Number(userGrade.score) > 100 || Number(userGrade.score) < 0) {
    res.status(400).json({ error: 'Valid score between 0 and 100 is required' });
    return;
  }

  const sql = `
  INSERT INTO "grades" ("name", "course", "score")
  VALUES ($1, $2, $3)
  RETURNING *`;

  const params = [userGrade.name, userGrade.course, userGrade.score];

  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const userGrade = req.body;
  const gradeId = Number(req.params.gradeId);
  if (!userGrade.name) {
    res.status(400).json({ error: 'Valid name is required' });
    return;
  } else if (!userGrade.course) {
    res.status(400).json({ error: 'Valid course is required' });
    return;
  } else if (!Number.isInteger(userGrade.score) || Number(userGrade.score) > 100 || Number(userGrade.score) < 0) {
    res.status(400).json({ error: 'Valid score between 0 and 100 is required' });
    return;
  } else if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'Grade ID must be a positive number' });
    return;
  }
  const sql = `
  UPDATE "grades"
  SET "name" = $2,
      "course" = $3,
      "score" = $4
  WHERE "gradeId" = $1
  RETURNING *;
  `;

  const params = [gradeId, userGrade.name, userGrade.course, userGrade.score];

  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json({ error: `Record at ${gradeId} does not exist` });
      } else {
        res.status(201).json(result.rows[0]);
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'Grade ID must be a positive number' });
  }
  const sql = `
  DELETE FROM "grades"
  WHERE "gradeId" = $1
  RETURNING *
  `;

  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json({ error: `Record at ${gradeId} does not exist` });
      } else {
        res.status(204).send();
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.listen(3000, () => {
  // console.log('listening on port 3000');
});
