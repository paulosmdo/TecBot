const { isSaturday, isTimeWithinLimit } = require('../utils/dateUtils');

module.exports = (app) => {
    app.message(async ({message, say, client }) => {
        if(message.channel == 'C06E1RJGN2V' || message.channel == 'C06EASEB0JC'){
          if (!(isSaturday() && isTimeWithinLimit())) {
            // await client.chat.delete({
            //   channel: message.channel,
            //   ts: message.ts,
            // });
            await say(`Desculpe! Este é um canal ativo apenas aos sábados, das 8h às 12h. Por favor, volte durante esse período.`)
          } 
        }
      });
}