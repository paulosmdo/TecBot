const express = require('express');
const enviarMensagemDireta  = require('../../utils/metodosBot'); 

function configurarRotasDeDesafio(app) {
  const router = express.Router();

  router.get('/techack',function(req, res){  
    res.sendFile(__dirname + '/index.html');
  });
  router.get('/qr-code',function(req, res){  
    res.sendFile(__dirname + '/qr-code.html');
  });

  router.get('/desafio/logo.png',function(req, res){  
    res.sendFile(__dirname + '/logo.png');
  });

  router.get('/desafio/esteganografia.jpg',function(req, res){  
    res.sendFile(__dirname + '/esteganografia.jpg');
  });

  router.get('/desafio/qr-code.png',function(req, res){  
    res.sendFile(__dirname + '/qr-code.png');
  });

  return router;
}

module.exports = configurarRotasDeDesafio;
