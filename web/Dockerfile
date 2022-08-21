FROM node:current-alpine
WORKDIR /app
RUN npm upgrade -g yarn

CMD [ "yarn", "parcel", "watch", "--port", "5555", "--no-cache", "/app/src/index.html" ]
