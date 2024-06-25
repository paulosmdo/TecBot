
# TecBot - Slack Automation Bot  

TecBot é um bot desenvolvido para Slack, criado para automatizar algumas tarefas no ambiente de desenvolvimento. Ele foi projetado para oferecer suporte em várias operações.

## Funcionalidades Principais

-   **Monitoramento do Canal Home-Office:** TecBot monitora o canal home-office e fornece avisos específicos, restringindo mensagens a determinados dias e horários.
    
-   **Backup Automatizado:** Notificações automáticas são enviadas quando um backup é iniciado e quando é concluído. Essas notificações são recebidas através de chamadas da ferramenta de backup via API REST.

-   **Monitoramento de Saúde do Servidor:** Funcionalidade de ping para verificar a saúde dos servidores designados.
    
-   **Expansibilidade:** TecBot foi projetado para ser facilmente estendido e adaptado para novas tarefas conforme as necessidades evoluem.

## Configuração

Antes de executar o TecBot, certifique-se de preencher o arquivo `.env` com as credenciais obtidas no site do Slack.

`SLACK_CLIENT_ID=seu_client_id`
`SLACK_CLIENT_SECRET=seu_client_secret`
`SLACK_SIGNING_SECRET=sua_signing_secret` OBRIGATORIO
`SLACK_TOKEN=seu_bot_token` OBRIGATORIO
`SLACK_APP_TOKEN=seu_app_token`
    

## Como Executar o TecBot

Para executar o TecBot localmente, siga os passos abaixo:

1.  **Instalação de Dependências:** Execute o comando abaixo para instalar as dependências necessárias:        
    -   `npm install` 
    
2.  **Execução Local:** Inicie o TecBot localmente com o comando:        
    -    `node ./index.js` 
    

## Executando no Docker

Para executar o TecBot usando Docker, siga as instruções abaixo:

1.  **Construção da Imagem Docker:** Execute o comando para construir a imagem Docker do TecBot:        
    -    `docker build . --no-cache -t tecbot` 
    
2.  **Execução do Contêiner Docker:** Inicie o contêiner Docker do TecBot com o comando:        
    -    `docker run -p 3000:3000 -d tecbot` 
    

Certifique-se de ajustar as configurações do TecBot conforme necessário no arquivo `index.js` antes de iniciar. Consulte a documentação do Slack e da ferramenta de backup para configurar as integrações corretas.