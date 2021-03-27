FROM node:14.9.0-alpine

WORKDIR /usr/src/martian

COPY package.json .
COPY package-lock.json .

RUN npm install

ADD src src

RUN ls -la

CMD ["npm", "run", "start-script"]