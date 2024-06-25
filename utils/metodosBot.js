async function enviarMensagemDireta(app, userId, mensagem) {
    try {
      await app.client.chat.postMessage({
        channel: userId,
        text: mensagem,
      });
      console.log(`Mensagem enviada com sucesso para ${userId}`);
    } catch (error) {
      console.error('Erro ao enviar mensagem direta:', error);
    }
}

module.exports = enviarMensagemDireta;