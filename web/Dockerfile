FROM node:current-alpine
WORKDIR /app
RUN npm upgrade -g yarn

CMD [ "yarn", "parcel", "watch", "--hmr-port", "5555", "--no-cache", "src/*" ]
