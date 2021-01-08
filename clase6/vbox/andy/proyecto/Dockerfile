FROM node
LABEL author andy
ENTRYPOINT ["node","server.js"]
RUN mkdir mi-server
WORKDIR /mi-server
COPY ./server.js /mi-server/server.js
COPY ./package.json /mi-server/package.json
EXPOSE 3000
RUN npm install 
ENV IP_MONGO=127.0.0.1
