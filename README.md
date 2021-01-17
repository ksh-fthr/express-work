# このアプリについて
`express` の理解を深めるためにアレコレすることを目的としたものです。
したがって、完全に個人での利用を目的としたものであり、更新のたびに以前の機能が無くなることがあります。

上記より master ブランチは意味のある役割を持っていません。
もし学習の内容が気になる場合は各ブランチをご参照ください。

# ブランチについて
基本的にそのとき確認した内容ごとにブランチを切ります。
現在は次のブランチがあります。

* [feat_angular_combination](https://github.com/ksh-fthr/express-work/tree/feat_angular_combination)
  * フロントエンドを Angular, バックエンドを express として、両者の疎通確認をためすためのブランチ
* [feat_sequelize_join](https://github.com/ksh-fthr/express-work/tree/feat_sequelize_join)
  * PostgreSQL をターゲットとして ORM: Sequelize でテーブルの結合方法を学習するためのブランチ
* [feat_sequelize](https://github.com/ksh-fthr/express-work/tree/feat_sequelize)
  * PostgreSQL をターゲットとして ORM: Sequelize の基本的な使用方法を学習するためのブランチ
  * Qiita の [[Sequelize] Sequelize の導入と簡単な使い方](https://qiita.com/ksh-fthr/items/7bc66911fd5c7506deeb) で扱った
* [feat_http_method](https://github.com/ksh-fthr/express-work/tree/feat_http_method)
  * フロントエンドを Angular, バックエンドを express として、両者の疎通確認をためすためのブランチ
  * Qiita の [[Angular] HTTPクライアント(RESTクライアント)を実装する](https://qiita.com/ksh-fthr/items/840ae54472892a87f48d) で扱った
* [feat_api_routing](https://github.com/ksh-fthr/express-work/tree/feat_api_routing)
  * API のルーティングを index.js から切り離すための仕組みを試すブランチ
  * [feat_sequelize](https://github.com/ksh-fthr/express-work/tree/feat_sequelize) と [feat_http_method](https://github.com/ksh-fthr/express-work/tree/feat_http_method) で作成した API を対象とした
  * Qiita の [[Express] REST-API をサービス単位で管理する](https://qiita.com/ksh-fthr/items/6351e95922adbff22937) で扱った記事を参考に実装した
