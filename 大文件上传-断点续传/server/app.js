var express = require('express');
const bodyParse = require('body-parser')
var indexRouter = require('./routes/index')
const { assetsPath } = require('./global')

var app = express();

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});
app.use(express.static(assetsPath))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);


app.listen(8848, () => {
  console.log('server is runing')
})
module.exports = app;
