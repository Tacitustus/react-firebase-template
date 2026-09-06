# React Firebase Template

このリポジトリは **GitHub の Public template リポジトリ** として利用されることを想定しています。
AIエージェントや開発者がWebアプリを開発する際に毎回使い回す、React + Vite + TailwindCSS のひな形プロジェクトです。

## セットアップ手順

1. `Use this template` でリポジトリを作成
2. `git clone` でローカルにクローン
3. `npm install` を実行して依存関係をインストール
4. `npm run setup` を実行してプロジェクト情報（名前など）を一括更新

## 開発コマンド

- `npm run dev` : 開発サーバーの起動
- `npm run build` : 本番用ビルドの作成
- `npm run preview` : ビルドしたファイルのローカルプレビュー
- `npm run lint` : ESLint による静的解析

## Firebase の設定・デプロイ手順

以下の2通りのセットアップ方法があります。

### 1. 自動セットアップ（推奨）
ローカルで以下のコマンドを実行します。
```bash
npx firebase init hosting:github
```
指示に従って進めると、`.github/workflows` 内のファイルが自動生成され、Firebase サービスアカウントの認証情報（Secrets）も自動で登録されます。

### 2. 手動セットアップ
1. Firebase コンソールからサービスアカウントを発行します。
2. GitHub のリポジトリの Settings > Secrets and variables > Actions に、発行した JSON の内容を `FIREBASE_SERVICE_ACCOUNT_<PROJECT_ID>` という名前で登録します。
3. `.firebaserc` および `.github/workflows` 内の `<FIREBASE_PROJECT_ID>` と `<PROJECT_ID>` の部分をご自身のプロジェクト ID に置き換えてください。
