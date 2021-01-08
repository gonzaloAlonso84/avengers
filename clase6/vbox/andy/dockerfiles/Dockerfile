FROM node
LABEL author andy
ENTRYPOINT ["node","ever.js"]
RUN mkdir sarasa
WORKDIR /sarasa
COPY ./ever.js /sarasa/ever.js
EXPOSE 3000
RUN npm install underscore
ENV IP_MONGO=127.0.0.1
