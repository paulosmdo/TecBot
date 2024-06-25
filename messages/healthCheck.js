const enviarMensagemDireta = require('../utils/metodosBot');
const { exec } = require('child_process');

module.exports = (app) => {
  var HOST_SERVIDOR = [
    //{host:'10.2.25.215', status_on: true, count: 0},
    { host: '10.2.25.231', name: 'TFS', status_on: true, count: 0 },
    { host: '10.2.25.17', name: 'OTRS', status_on: true, count: 0 },
    // { host: '10.2.25.50', name: 'CENTRAL TELEFONICA', status_on: true, count: 0 },
    //{ host: '10.2.25.209', name: 'ROBOZINHO CONTINGENCIA', status_on: true, count: 0 },
    // {host:'10.2.25.245', name:'HGLE', status_on: true, count: 0},
    // {host:'10.2.25.191', name:'CONCENTRADORA HORUSTECH', status_on: true, count: 0},
    // {host:'10.2.25.91', name:'CONCENTRADORA EZTECH', status_on: true, count: 0},
    // {host:'10.2.25.231', status_on: true},
    // {host:'10.2.25.211', status_on: true},
  ];

  var ENDPOINT = [
    { host: 'http://10.2.25.209:5990/Gerencia/GetStatusWhatsApp', name: 'WHATSAPP', status_on: true, count: 0 },
  ]

  async function verificarDisponibilidadeServidor(sv) {
    exec(`ping -c 1 ${sv.host}`, { timeout: 10000 }, (error, stdout, stderr) => {
      if (error) {
        if (sv.status_on && sv.count == 3) {
          sv.status_on = false;
          sv.count = 0;
          enviarMensagemDireta(app, 'C06J3MDFKS4', `❌❌❌ #${sv.name}_${sv.host} parece estar offline.`);
        }
        sv.count++;
        return;
      }
      if (stderr) {
        //console.error(`Erro ao verificar a disponibilidade do servidor2: ${stderr}`);
        //notificarSlack(canalSlack, `Erro ao verificar a disponibilidade do servidor.`);
        return;
      }
      if (stdout.includes('1 packets transmitted, 1 packets received')) {
        if (!sv.status_on) {
          console.log(`${sv.host} está online.`);
          sv.status_on = true;
          sv.count = 0;
          enviarMensagemDireta(app, 'C06J3MDFKS4', `🟢🟢🟢 #${sv.name}_${sv.host} está online.`);
        }
      } else {
        if (sv.status_on && sv.count == 3) {
          sv.status_on = false;
          sv.count = 0;
          enviarMensagemDireta(app, 'C06J3MDFKS4', `❌❌❌ #${sv.name}_${sv.host} parece estar offline.`);
        }
      }
    });
  }

  async function verificarDisponibilidadeEndPoint(sv) {
    console.log(sv.host);
    fetch(sv.host, { method: "GET", redirect: "follow"})
      .then((response) => response.text())
      .then((result) => {
        if(!result.includes('WhatsApp Conectado'))
          enviarMensagemDireta(app, 'C06DN2P6WKU', `❌❌❌ #${result}.`);
      })
      .catch((error) => console.error(error));
  }

  function isTimeWithinLimit() {
    const now = new Date();
    return now.getHours() >= 6 && now.getHours() <= 18;
  }

  setInterval(() => {
    HOST_SERVIDOR.forEach(element => {
      verificarDisponibilidadeServidor(element)
    });
  }, 150000); // 300000 ms = 5 minutos

  // setInterval(() => {
  //   if(isTimeWithinLimit()){
  //     ENDPOINT.forEach(element => {
  //       verificarDisponibilidadeEndPoint(element)
  //     });
  //   }
  // }, 300000); // 300000 ms = 5 minutos
}


