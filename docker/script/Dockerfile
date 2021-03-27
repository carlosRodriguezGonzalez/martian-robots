FROM node:14.9.0-alpine

WORKDIR /usr/src/martian

COPY ../../package.json .
COPY ../../package-lock.json .

RUN npm install

COPY ../../src .

CMD ["npm", "run", "start-script"]