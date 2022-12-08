FROM node:16.14.2-alpine3.15
RUN mkdir mss-a1
COPY . ./mss-a1
WORKDIR /mss-a1/
RUN npm install
EXPOSE 8082
CMD ["npm", "start"]


