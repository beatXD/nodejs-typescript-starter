FROM node:14.15.0-alpine3.10 as builder

WORKDIR /usr/app/

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install --silent

COPY . .

RUN npm run build



FROM node:14.15.0-alpine3.10

WORKDIR /usr/app/

COPY package*.json ./

RUN npm install

COPY --from=builder /usr/app/dist ./dist

EXPOSE 9090

CMD ["npm","start"]