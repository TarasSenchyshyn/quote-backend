const express = require('express');
var bodyParser = require('body-parser');
const config = require('./config');

const app = express();

const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    origin: '*',
    optionsSuccessStatus: 200,
  })
);

app.use(bodyParser.json());

require('./config/routes')(app);

async function start() {
  try {
    app.listen(config.port, () => {
      console.log('Server is running on ' + config.port);
    });
  } catch (e) {
    console.log('Error => ', e);
  }
}
start();
