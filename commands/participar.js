const enviarMensagemDireta = require('../utils/metodosBot');

module.exports = (app) => {
    app.command('/participar', async ({ ack, say, command  }) => {
        // Reconhecer o comando slash
        await ack();
      
        // ID do usuário que executou o comando slash
        const {user_id, user_name, channel_name} = command;
      
        await say(`🚀 *Desafio Iniciado ${user_name}!* 💀 Instruções Enviadas! 💡🔍`)
        enviarMensagemDireta(app, user_id, `🚀 *Bem-vindo à Jornada Digital!* 🚀
      
        Parabéns ${user_name} por dar o primeiro passo nesta aventura intrigante! Você está prestes a embarcar em um desafio que testará suas habilidades de lógica e criatividade ao máximo.
        
        🔗 *Seu primeiro desafio começa aqui:* http://10.2.25.230:3000/techack 
        
        Lembre-se, cada enigma solucionado abrirá a porta para o próximo nível, tecendo seu caminho através de um labirinto de mistérios digitais.
        
        🔎 *Dicas para Começar:*
        
        * Mantenha a mente aberta para todas as possibilidades.
        * Anote suas ideias e observações, elas podem ser úteis mais tarde.
        * Não hesite em usar o comando /ajuda se precisar de um empurrãozinho na direção certa.
        
        Desejamos a você uma jornada cheia de descobertas e realizações. Que a curiosidade seja sua bússola e a persistência, seu motor. Boa sorte!
        
        🌟 *Vamos lá! O desafio te espera.* 🌟`);
      });
}