const fs = require('fs');
const express = require('express');

const port = 2000;
const app = express();

app.get('/', function(req, res){
  var fileDir = __dirname + '/logs.json';
  var file = fs.readFileSync(fileDir);
  var jsonObject = JSON.parse(file);

  res.json(jsonObject);
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
