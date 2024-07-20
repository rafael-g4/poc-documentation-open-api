FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine
RUN npm install -g pm2

WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev
EXPOSE 3000

ARG NODE_ENV
ARG APP_NAME
ENV NODE_ENV=${NODE_ENV}
ENV APP_NAME=${APP_NAME}

CMD ["pm2-runtime", "dist/main.js"]