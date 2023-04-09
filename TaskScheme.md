# Task Scheme

## Query

- タスク一覧を取得

```graphql
query {
  getTasks {
    id
    name
    duDate
    status
    description
    createdAt
    updatedAt
  }
}
```

## Mutation

- タスクを新規作成

```graphql
mutation createTask($createTaskInput: CreateTaskInput!) {
  createTask(createTaskInput: $createTaskInput) {
    id
    name
    duDate
    status
    description
    createdAt
    updatedAt
  }
}
```

## Query Variables

```graphql
{
  "createTaskInput": {
    "name": "Test Task 1",
    "duDate": "2023-04-01",
    "description": "this is test"
  }
}
```
