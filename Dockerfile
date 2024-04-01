FROM node:20

WORKDIR /pratham/src/app

COPY package* .

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]