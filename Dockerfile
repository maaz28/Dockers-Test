#define base image
FROM node:alpine

#define working directory in container
WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

#define startup command
CMD ["npm", "start"]