# Use the official Node.js base image
FROM node:latest as build

RUN mkdir /project
WORKDIR /project

RUN npm install -g @angular/cli@15

COPY package.json package-lock.json ./
RUN npm install

COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0"]
