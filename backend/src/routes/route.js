const controller = require('../controllers/programmesController')();

module.exports = (app) => {
  app.route('/programmes')
    .get(controller.listProgrammes);

  app.route('/programmes/:date')
    .get(controller.listProgrammesOnNewDate);
};
