const express = require('express');
const app = express();

app.use(function (req, res) {
  // console.log(req.method);
  res.send('SHREK');
});

app.listen(3000, () => {
  // console.log('Listening on port 3000!');
});
