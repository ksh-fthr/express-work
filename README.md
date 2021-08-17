# このアプリについて
`express` の理解を深めるためにアレコレすることを目的としたものです。
したがって、完全に個人での利用を目的としたものとなります｡

もし学習の内容が気になる場合は後述する各ブランチをご参照ください。



# 環境について

| 環境                                       | バージョン | 備考                    |
| :----------------------------------------- | :--------- | :---------------------- |
| [Node.js](https://nodejs.org/ja/)          | v12.18.3   | `$ node --version`      |
| [npm](https://www.npmjs.com/)              | v6.14.6    | `$ npm --version`       |
| [express](https://expressjs.com/)          | v4.17.1    | package.json の記載から |
| [Sequelize](https://sequelize.org/master/) | v6.4.0     | 同上                    |



# ブランチについて

基本的にそのとき確認した内容ごとにブランチを切ります。
現在は次のブランチがあります。

* [feat_angular_combination](https://github.com/ksh-fthr/express-work/tree/feat_angular_combination)
  * フロントエンドを Angular, バックエンドを express として、両者の疎通確認をためすためのブランチ
* [feat_sequelize_join](https://github.com/ksh-fthr/express-work/tree/feat_sequelize_join)
  * PostgreSQL をターゲットとして ORM: Sequelize で **テーブルの結合方法** を学習するためのブランチ
  * [master](https://github.com/ksh-fthr/express-work) ブランチで提供している API もこのブランチで作成している
* [feat_sequelize](https://github.com/ksh-fthr/express-work/tree/feat_sequelize)
  * PostgreSQL をターゲットとして ORM: Sequelize の基本的な使用方法を学習するためのブランチ
  * Qiita の [[Sequelize] Sequelize の導入と簡単な使い方](https://qiita.com/ksh-fthr/items/7bc66911fd5c7506deeb) で扱った
  * [master](https://github.com/ksh-fthr/express-work) ブランチで提供している API もこのブランチで作成している
* [feat_http_method](https://github.com/ksh-fthr/express-work/tree/feat_http_method)
  * フロントエンドを Angular, バックエンドを express として、両者の疎通確認をためすためのブランチ
  * Qiita の [[Angular] HTTPクライアント(RESTクライアント)を実装する](https://qiita.com/ksh-fthr/items/840ae54472892a87f48d) で扱った
  * [master](https://github.com/ksh-fthr/express-work) ブランチで提供している API もこのブランチで作成している
* [feat_api_routing](https://github.com/ksh-fthr/express-work/tree/feat_api_routing)
  * API のルーティングを index.js から切り離すための仕組みを試すブランチ
  * [feat_sequelize](https://github.com/ksh-fthr/express-work/tree/feat_sequelize) と [feat_http_method](https://github.com/ksh-fthr/express-work/tree/feat_http_method) で作成した API を対象とした
  * Qiita の [[Express] REST-API をサービス単位で管理する](https://qiita.com/ksh-fthr/items/6351e95922adbff22937) で扱った記事を参考に実装した



# 用意してある API

現在､ master ブランチでは以下の API を用意しております｡

| 関連ブランチ   | API                               | 説明                       | HTTPメソッド | ストレージについて                            |
| ---------- | --------------------------------- | -------------------------- | ------------ | --------------------------------------------- |
| [feat_sequelize](https://github.com/ksh-fthr/express-work/tree/feat_sequelize)     | http://localhost:3000/employee/find?id=[N] | 従業員情報をID指定して取得 | GET          | `Company` DB を対象に処理する                 |
|            | http://localhost:3000/employee/find | 従業員情報を全件取得       | GET          | 同上                                          |
|            | http://localhost:3000/employee/register | 従業員情報を登録           | POST         | 同上                                          |
|            | http://localhost:3000/employee/update | 従業員情報をID指定して更新 | PUT          | 同上                                          |
|            | http://localhost:3000/employee/remove | 従業員情報をID指定して削除 | DELETE       | 同上                                          |
| [feat_sequelize_join](https://github.com/ksh-fthr/express-work/tree/feat_sequelize_join) | http://localhost:3000/member/findAll | プロジェクトのメンバ情報を全件取得 | GET | `Company` DB を対象に処理する |
| [feat_http_method](https://github.com/ksh-fthr/express-work/tree/feat_http_method) | http://localhost:3000/message/get | メッセージを全件取得       | GET          | DB は持たず、メモリ上のデータを対象に処理する |
|            | http://localhost:3000/message/post | メッセージを登録           | POST         | 同上                                          |
|            | http://localhost:3000/message/put | メッセージをID指定して更新 | PUT          | 同上                                          |
|            | http://localhost:3000/message/delete | メッセージをID指定して削除 | DELETE       | 同上                                          |



# 起動方法

## 事前準備
あらかじめ以下のコマンドを実行して依存関係を解決しておきます｡

```zsh
$ npm install
```

## 起動
次のコマンドを実行します｡

```zsh
$ npm run start
```



# 動作確認

[Postman](https://www.postman.com/) を使って確認しています｡
動作確認の際は [communication-check.postman_collection.json](./postman/communication-check.postman_collection.json) を Postman に import してご利用ください｡



# 補足

## `Company` DB に対して処理する API について
あらかじめ DB が作成されている必要があります｡
ご確認の際は以下のいずれかをお試しください｡

- [こちら](https://github.com/ksh-fthr/postgresql-in-docker/blob/main/postgresql/init/initialize.sql) の DDL から DB を構築していただく
- [こちらのリポジトリ](https://github.com/ksh-fthr/postgresql-in-docker) から Docker 経由で DB をご利用いただく
