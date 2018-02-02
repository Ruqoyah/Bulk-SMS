const express = require('express');
const bodyParser = require('body-parser');
const winston = require('winston')

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  winston.info(`Connected on port: ${port}`);
});

export default app;