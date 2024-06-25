FROM node:21.5.0-alpine3.19

# Configuração do fuso horário 
ENV TZ=America/Fortaleza
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /usr/src/app
COPY . .

RUN npm install

EXPOSE 3000
CMD ["node", "index.js"]
