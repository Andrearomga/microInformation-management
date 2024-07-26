FROM node:20.13.0-alpine

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm install -g ts-node ts-node-dev typescript
RUN npm install ts-node-dev --save-dev

EXPOSE 3001

CMD [ "npm", "run", "dev" ]