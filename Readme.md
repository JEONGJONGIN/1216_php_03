# Music Bank(お気に入り音楽情報貯蔵庫)_ver2

## DEMO

  - デプロイしている場合はURLを記入（任意）

## 紹介と使い方

  - PHPのSQL機能にて開発したアプリです。
    index.phpフォームにて、記録したい音楽の情報を記入し、送付ボタンを押したらデータ一覧(select.php)にその情報がセーブされます。
    尚、登録いただいたURLについて、クリックしたら対象ページに飛ぶようにコード作成しており
    削除したい内容に備え、削除ボタンも用意しております。
    前回の機能に加え、各登録内容を編集・更新可能になるよう機能を追加しました。

## 工夫した点

  - ・対象URLに飛べるようにした点。
    ・SQLへのリモート登録機能のみではなく、リモート削除機能を加えた点。
    ・記録アプリとして、どんな内容を記録したいかを考え、セレクトメニューなど用意した点。
    ・各登録内容を編集・更新可能になるよう機能を準備した点。

## 苦戦した点

  - ①リモート削除機能を準備する際、仕組みの理解
    (今でも完璧に理解しているわけではないですが。。。)
    ②セレクトメニューをSQLにsaveする作業
    (こちらは、セレクトメニューの各オプションにvalue値を追加することで解決しました！)

## 参考にした web サイトなど

  - 後で見返せるように