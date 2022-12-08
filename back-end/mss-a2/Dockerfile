FROM node:16.14.2-alpine3.15
RUN mkdir mss-a2
COPY . ./mss-a2
WORKDIR /mss-a2/
RUN npm install
EXPOSE 8081
CMD ["npm", "start"]


