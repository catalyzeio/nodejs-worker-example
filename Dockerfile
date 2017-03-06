FROM node:alpine

EXPOSE 8080

COPY package.json package.json

COPY index.js index.js

RUN npm install

RUN apk update

RUN apk add curl

CMD ["npm", "start"]
