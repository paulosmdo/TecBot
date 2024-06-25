const participar = require('./participar');
const ajuda = require('./ajuda');
const resposta = require('./resposta');

module.exports = (app) => {
  participar(app);
  ajuda(app);
  resposta(app);
};
