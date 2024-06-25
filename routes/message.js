const express = require('express');
const enviarMensagemDireta  = require('../utils/metodosBot'); 

function configurarRotasDeMessage(app) {
  const router = express.Router();

  router.post('/enviar', (req, res) => {
    const { chat_id, mensagem } = req.body;

    if (!chat_id || !mensagem) {
      return res.status(400).json({ error: 'A propriedades são obrigatórias no corpo da solicitação.' });
    }
    enviarMensagemDireta(app, chat_id, mensagem);

    res.json({ Status: 'OK', Mensagem: 'A msg foi enviada com sucesso' });
  });

  router.post('/enviar2', (req, res) => {
    const { chat_id, mensagem } = req.body;

    if (!chat_id || !mensagem) {
      return res.status(400).json({ error: 'A propriedades são obrigatórias no corpo da solicitação.' });
    }
    let comandoajuda = "`/ajuda`" 
    let comandoparticipar = "`/participar`" 
    enviarMensagemDireta(app, chat_id, `🔐 *Desafio de Lógica: A Jornada Digital* 🧠

    Bem-vindos à Jornada Digital, um desafio fascinante que irá testar sua destreza mental e habilidades lógicas! Prepare-se para uma experiência única, onde cada enigma desvendado o levará a novos patamares de conhecimento e desafios.
    

    *Como Participar:*
    Digite o comando ${comandoparticipar} para embarcar nesta jornada intelectual. Você será guiado por uma série de enigmas intrigantes, projetados para desafiar sua capacidade de raciocínio lógico e pensamento criativo.
    

    *Objetivo:*
    Seu objetivo é desvendar cada desafio, superando obstáculos digitais enquanto desvenda códigos, padrões e segredos ocultos. Cada resposta correta o conduzirá a uma nova fase do desafio, revelando um universo de conhecimento digital.
    

    *Regras:*    
        - Respeite os demais participantes, mantendo um ambiente colaborativo.
        - Não compartilhe respostas ou dicas diretamente no canal geral.
        - Use o comando ${comandoajuda} a qualquer momento para obter orientações adicionais.


    *Premiação:*
    Os primeiros a completar a Jornada Digital terão suas habilidades reconhecidas e receberão um lugar de destaque no Hall da Fama da TecSoft. Além disso, a satisfação de conquistar um desafio único e estimulante!
    
    Prepare-se para embarcar nessa jornada intrigante. Boa sorte, participantes! 🚀✨`);

    res.json({ Status: 'OK', Mensagem: 'A msg foi enviada com sucesso' });
  });

  return router;
}

module.exports = configurarRotasDeMessage;
