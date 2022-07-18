const express = require('express');
const path = require('path');
const app = express();

const pathJoin = path.join(__dirname, 'public');

const expressStatic = express.static(pathJoin);

app.use(expressStatic);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
