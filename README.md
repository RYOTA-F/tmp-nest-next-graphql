# Template: Next.js × NestJS × PostgreSQL × Prisma × GraphQL × Docker

## About

GraphQL API ベースのバックエンドテンプレートです。

## Setup

### Docker env

1. `.env` file copy

```
cp .env.example .env
```

2. `.env` file edit

### Prisma env

1. `.env` file copy

```
cp ./packages/backend/.env.example ./packages/backend/.env
```

2. `.env` file edit

### yarn install

```sh
% docker-compose run --rm tmp_nest_next_graphql_server yarn install
```

### migration run

```sh
% docker-compose run --rm tmp_nest_next_graphql_server npx prisma migrate dev --name init
```

## Run

```sh
% docker-compose up -d
```

## URL

### GraphQL Playground

```
http://localhost:3001/graphql
```

### Prisma Studio

```
http://localhost:5555/
```

## Versions

- Node.js: v18.10.0
- NestJS: v9.3.0
- Prisma: v4.12.0
