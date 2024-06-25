const avisos = require('./avisos');
const healthCheck = require('./healthCheck');

module.exports = (app) => {
  avisos(app);
  healthCheck(app);
};