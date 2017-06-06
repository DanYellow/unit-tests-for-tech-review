const fs = require('fs');
const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

const port = 2000;
const app = express();

nunjucks.configure(path.join('./'), {
    express: app,
    autoescape: true
});

app.get('/', function(req, res){
  var fileDir = __dirname + '/logs.json';
  var file = fs.readFileSync(fileDir);
  var jsonObject = JSON.parse(file);

  // res.json(jsonObject);

  res.render('index.html', {
    content: jsonObject
  })
}); 

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))