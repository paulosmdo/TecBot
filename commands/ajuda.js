const enviarMensagemDireta = require('../utils/metodosBot');

module.exports = (app) => {
    app.command('/ajuda', async ({ ack, say, command  }) => {
        // Reconhecer o comando slash
        await ack();
      
        // ID do usuário que executou o comando slash
        const {user_id, user_name, channel_name} = command;
      
        enviarMensagemDireta(app, user_id, `🆘 *Precisa de Ajuda? Estamos aqui!* 🤖💡
      
      
        Olá ${user_name}! Se você se encontrou em um impasse ou está em busca de dicas, estamos prontos para auxiliar você na Jornada Digital.
        
      
        🗝️ *Dica Geral:*
        Mantenha a mente aberta e explore cada pista com curiosidade. Às vezes, a resposta está mais próxima do que você imagina!
        
      
        🔍 *Sugestão Rápida:*
        Se você estiver enfrentando dificuldades em um enigma específico, tente pesquisar no Google por palavras-chave relevantes. Às vezes, uma nova perspectiva pode iluminar o caminho! USE O PC!
        
      
        Não hesite em utilizar essa ferramenta para avançar na sua jornada. Boa sorte, e que a busca pelo conhecimento seja recompensadora!
        
        🌐 *Mantenha a curiosidade aguçada!* 🧭🚀
        `);
      });
}