FROM node:18.16.0-alpine

WORKDIR /urbano_core/ms/tango

COPY . .

RUN npm install npm@9.6.7 -g

RUN npm install --include=dev

EXPOSE 3005
