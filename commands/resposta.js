const enviarMensagemDireta = require('../utils/metodosBot');

module.exports = (app) => {
    app.command('/resposta', async ({ ack, say, command  }) => {
        // Reconhecer o comando slash
        await ack();
      
        // ID do usuário que executou o comando slash
        const {user_id, user_name, channel_name, text} = command;
        if(text == 'desafiomuitofacil'){
          enviarMensagemDireta(app, 'U06D09XVD61', 'DESAFIO01:'+user_name);
          enviarMensagemDireta(app, user_id, `🎉 *Parabéns Desbravador Digital!* 🎊
      
      
          Incrível! Você triunfou no primeiro desafio com maestria, desvendando os segredos ocultos. Sua astúcia é notável!
      
          
          Agora, prepare-se para a próxima etapa da Jornada Digital. Direcione-se ao servidor de arquivos pessoal de Paulo Sérgio e procure pelo arquivo 123.txt. Abra-o para revelar o próximo enigma que aguarda sua perspicácia.
          
          
          O caminho à frente promete desafios ainda mais fascinantes. Que a sua jornada continue cheia de descobertas! 🚀🗂️
          `);
      
        }
      
        else if(text == 'desvendeioenigma'){
          enviarMensagemDireta(app, 'U06D09XVD61', 'DESAFIO02:'+user_name);
          enviarMensagemDireta(app, user_id, `🎉 *Parabéns Desbravador Digital!* 🎊
      
          Neste terceiro desafio, seu discernimento será posto à prova em uma busca por respostas fragmentadas. Inicie sua jornada explorando o intrigante QR-Code no endereço http://10.2.25.230:3000/qr-code. Dentro dele, você encontrará uma parte essencial da solução.
          
          Entretanto, a resposta completa não se encontra apenas nesse código, mas sim na harmonia entre sua descoberta e o número místico no endereço da TecSoft. Una esses elementos de forma sutil e, quando a sinfonia da compreensão ressoar em sua mente, envie o comando:
          
          */resposta respostadodesafio*
          
          Que os códigos guiem seus passos e a verdade se revele diante de você! 🌌🔍
          `);
      
        }
        else if(text == 'tecsoft4180'){
          enviarMensagemDireta(app, 'U06D09XVD61', 'DESAFIO03:'+user_name);
          enviarMensagemDireta(app, user_id, `🎉 *Parabéns, Mestre dos Enigmas!* 🎓🔓
      
          
          Você conquistou todos os desafios da Jornada Digital com bravura e sagacidade! Sua dedicação e habilidades foram verdadeiramente excepcionais.
      
          
          Ao desvendar mistérios e superar obstáculos, você provou ser um verdadeiro explorador do conhecimento. Como recompensa por sua conquista, sua notoriedade será eternizada no Hall da Fama da TecSoft.
          
          Continue trilhando o caminho da curiosidade e inovação. A jornada pode ter chegado ao fim, mas novos horizontes de desafios aguardam aqueles que buscam conhecimento. Parabéns novamente pelo seu feito extraordinário! 🚀🌟
          `);
        }else{
          enviarMensagemDireta(app, user_id, "Ops! Parece que você errou. Tente novamente! 🔄🧩");
        }  
      });
}