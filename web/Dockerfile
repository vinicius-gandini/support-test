FROM node:lts-alpine

LABEL mantainer="RankMyAPP"
LABEL version="1.0"

WORKDIR /var/www/web

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]
