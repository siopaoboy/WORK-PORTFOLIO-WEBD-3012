FROM node:20-alpine3.20

WORKDIR /ilaw_danilo_final_site

COPY package*.json ./

RUN npm install

EXPOSE 5575

CMD [ "npm", "start" ]