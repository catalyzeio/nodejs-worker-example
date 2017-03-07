FROM node:alpine

EXPOSE 8080

RUN apk update

RUN apk add curl

COPY package.json package.json

RUN npm install

COPY index.js index.js

CMD ["npm", "start"]
