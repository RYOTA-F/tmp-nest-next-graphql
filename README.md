# Template: Next.js × NestJS × PostgreSQL × Prisma × GraphQL × Docker

## About

Docker ベースのアプリケーションテンプレートです。

- フロントエンド: Next.js
- バックエンド: NestJS
- API: GraphQL

## Setup

### Docker env

1. `.env` file copy

```
cp .env.example .env
```

2. `.env` file edit

### Backend env

1. `.env` file copy

```
cp ./packages/backend/.env.example ./packages/backend/.env
```

2. `.env` file edit

### Frontend env

1. `.env` file copy

```
cp ./packages/frontend/.env.example ./packages/frontend/.env
```

2. `.env` file edit

### yarn install

- Backend

```sh
% docker-compose run --rm server yarn install
```

- Frontend

```sh
% docker-compose run --rm app yarn install
```

### migration run

```sh
% docker-compose run --rm server npx prisma migrate dev --name init
```

## Run

```sh
% docker-compose up -d
```

## URL

### App

```
http://localhost:3000/
```

### GraphQL Playground

```
http://localhost:3001/graphql/
```

### Prisma Studio

```
http://localhost:5555/
```

### Storybook

```
http://localhost:6006/
```

## Lint

- Backend

```sh
% docker-compose run --rm server yarn lint
```

- Frontend

```sh
% docker-compose run --rm app yarn lint
```

## Test

- Frontend

```sh
% docker-compose run --rm app yarn test
```

## Versions

- Node.js: v18.10.0
- NestJS: v9.3.0
- Prisma: v4.12.0
- Next.js: v13.0.6
