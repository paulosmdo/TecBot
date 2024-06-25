const { App } = require('@slack/bolt');
const express = require('express');
                require('dotenv').config();
const configurarRotasDeBackup = require('./routes/backup');
const configurarRotasDeMessage = require('./routes/message');
const configurarRotasDeDesafio = require('./routes/desafio/desafio');
const api = express();

const app = new App({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    socketMode:true,
    signingSecret: process.env.SIGNING_SECRET,  // Substitua pelo seu Signing Secret do Slack
    token: process.env.TOKEN,  // Substitua pelo seu Bot Token do Slack
    appToken: process.env.APP_TOKEN
});

// Importar comandos e mensagens
require('./commands/index')(app);
require('./messages/index')(app);

(async () => {
  await app.start();
  console.log('🤖 TecBot está rodando!🎉');
})();

api.use(express.json())
api.listen('3000', () => {});
api.use('/api/backup', configurarRotasDeBackup(app));
api.use('/api/message', configurarRotasDeMessage(app));
api.use('/', configurarRotasDeDesafio(app));
