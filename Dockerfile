FROM node:8.12-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json package.json

RUN yarn \
    && yarn add nodemon \
    && yarn cache clean

COPY . .

ENV NODE_ENV=production

EXPOSE 3000

CMD ["yarn", "start"]