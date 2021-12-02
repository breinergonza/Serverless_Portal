FROM node:14.18.1-alpine
WORKDIR /app
COPY package.json ./
# COPY package-lock.json ./
COPY ./ ./

RUN npm install --legacy-peer-deps
# RUN npm i sass --save-dev
RUN npm rebuild node-sass --force
CMD ["npm", "start"]

EXPOSE 3000