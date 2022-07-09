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
    res.status(400).json({ error: 'valid name is required' });
  } else if (!userGrade.course) {
    res.status(400).json({ error: 'valid course is required' });
  } else if (!Number.isInteger(userGrade.score) || Number(userGrade.score) > 100 || Number(userGrade.score) < 0) {
    res.status(400).json({ error: 'valid score between 0 and 100 is required' });
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

// app.put('/api/grades/:gradeId');

// app.delete('/api/grades/:gradeId');

app.listen(3000, () => {
  // console.log('listening on port 3000');
});
