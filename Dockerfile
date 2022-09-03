FROM node:12
WORKDIR /mani
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node", "index.js" ]
