const express = require('express');
const enviarMensagemDireta  = require('../utils/metodosBot'); 

function configurarRotasDeBackup(app) {
  const router = express.Router();

  router.post('/concluido', (req, res) => {
    const { administracao } = req.body;

    if (!administracao) {
      return res.status(400).json({ error: 'A propriedade "administracao" é obrigatória no corpo da solicitação.' });
    }

    enviarMensagemDireta(app, 'C06J3MDFKS4', `Backup do banco de dados da administração: ${administracao} concluído com sucesso 🎉.`);

    res.json({ Status: 'OK', Mensagem: 'A msg foi enviada com sucesso' });
  });

  router.post('/iniciado', (req, res) => {
    const { administracao } = req.body;

    if (!administracao) {
      return res.status(400).json({ error: 'A propriedade "administracao" é obrigatória no corpo da solicitação.' });
    }

    enviarMensagemDireta(app, 'C06J3MDFKS4', `Backup do banco de dados da administração: ${administracao} INICIADO!`);

    res.json({ Status: 'OK', Mensagem: 'A msg foi enviada com sucesso' });
  });

  return router;
}

module.exports = configurarRotasDeBackup;
