## Description

Boilerplate for NestJS application with Swagger and OpenAPI specification

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running in Docker

Build the image

```bash
docker build -t swagger-api:latest .
```

Run the application in the image

```bash
docker run -p 3000:3000 swagger-api:latest
```
