const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const cors = require('cors');
const route = require('../src/routes/route');

module.exports = () => {
  const app = express();

  app.set('port', process.env.PORT || config.get('server.port'));

  app.use(cors());
  app.use(bodyParser.json());

  (route)(app);

  return app;
};
