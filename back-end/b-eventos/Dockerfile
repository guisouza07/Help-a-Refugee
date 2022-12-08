FROM node:16.14.2-alpine3.15
RUN mkdir b-eventos
COPY . ./b-eventos
WORKDIR /b-eventos/
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]


