const v1 = require("./routes/v1");
const config = require("./config/config");

const path = require('path');
const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');
let logger = require('morgan');
const app = express();
let cors = require('cors');


app.use(cors({
  origin: '*'
}));

app.use(logger('dev'));

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({
  limit: '50mb'
}));

app.use(bodyParser.urlencoded({
  limit: '50mb',
  parameterLimit: 100000,
  extended: true
}));


app.use('/api/v1', v1);
module.exports = app;