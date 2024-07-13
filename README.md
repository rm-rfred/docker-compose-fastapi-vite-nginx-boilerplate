# docker-compose-fastapi-vite-nginx-boilerplate

A boilerplate with FastAPI backend, React frontend and Nginx.
All microservices can be deployed with docker compose.

The app is optimized with fast hot-reload in development mode, while you can can serve a production-ready app with production config.

## Project setup

```bash

git clone git@github.com:rm-rfred/docker-compose-fastapi-vite-nginx-boilerplate.git
cp .env.example .env
```

## Run the project in development mode

```bash

docker compose build
docker compose up -d
```

### Run the project in production mode

```bash

docker compose -f docker-compose -f prod.docker-compose.yaml build
docker compose -f prod.docker-compose.yaml up -d
```

**With regards to the host port setup in your .env file**, you can access the project throw your [browser](http://172.17.0.1:10136).
Default port is 10136.
