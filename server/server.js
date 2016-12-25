require('./../config/config');
const path = require('path');
const express = require('express');

var port = process.env.PORT;
const publicPath = path.join(__dirname, '../public');
var app = express();


app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`App is up on port ${port}`);
});