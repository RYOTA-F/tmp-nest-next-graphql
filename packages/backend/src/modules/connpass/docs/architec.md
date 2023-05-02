# アーキテクチャ

## 概要

- レイヤードアーキテクチャがベース

### Client (Infrastructure)

- API クライアントのラッパークラス
- API クライアントのみに依存

### Entity

- 主要なデータ構造
- Entity は他のレイヤに依存しない

### Service (Domain)

- ドメインロジック
- Client と Repository と 他の Service だけに依存

### Usecase (Application)

- Client と Repository を使用して Resolver が必要なデータを取得する機能
- Client と Repository だけに依存

### Resolver (Application)

- Model(Entity) から ViewModel(GQLType) にデータを変換
- GraphQL 由来の処理のみの責務を持つ

### GQLType

- GraphQL のスキーマ定義のクラス
- スキーマ定義のみを責務とする
