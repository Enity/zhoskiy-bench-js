FROM node:14-alpine

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY ./dist ./dist
RUN yarn install --prod
CMD ["node", "dist/src/main.js"]
