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

## Firebase へのデプロイ手順

このテンプレートでは、GitHub Actionsを使用した自動デプロイを想定しています。
以下の手順に従って、Firebase HostingのセットアップとGitHubリポジトリとの連携を行ってください。

### 準備（初回のみ）
1. [Firebase Console](https://console.firebase.google.com/) でプロジェクトを作成します。
2. プロジェクトのメニューから「構築」>「Hosting」を選択し、Hosting を有効化します。
3. ローカルに `firebase-tools` がない場合はインストールします。
   ```bash
   npm install -g firebase-tools
   ```
4. Firebase CLI でログインします。
   ```bash
   npx firebase login
   ```

### セットアップ方法
「自動セットアップ」または「手動セットアップ」のいずれかを選択してください。**自動セットアップが簡単で推奨です。**

---

### 1. 自動セットアップ（推奨）
Firebase CLIの機能を使用して、GitHub Actionsの設定ファイル生成と、GitHub Secretsへの認証情報登録を自動で行います。

1. プロジェクトのルートディレクトリで以下のコマンドを実行します。
   ```bash
   npx firebase init hosting:github
   ```
2. 以下の質問に答えて進めます：
   - **"Please select an option"**: `Use an existing project` を選択し、準備ステップで作成したプロジェクトを選びます。
   - **"For which GitHub repository would you like to set up a GitHub workflow?"**: ご自身の `<ユーザー名>/<リポジトリ名>` を入力します（例: `your-name/my-react-app`）。
   - **"Set up the workflow to run a build script before every deploy?"**: `y` を入力します。
   - **"What script should be run before every deploy?"**: `npm ci && npm run build` を入力します。
   - **"Set up automatic deployment to your site's live channel when a PR is merged?"**: `y` を入力します。
   - **"What is the name of the GitHub branch associated with your site's live channel?"**: `main` （またはデプロイ対象のメインブランチ）を入力します。

> [!NOTE]
> コマンド完了後、`.github/workflows/` 以下のファイルが更新され、GitHubリポジトリの Secrets にデプロイ用のキーが自動で登録されます。

---

### 2. 手動セットアップ
自動セットアップがうまくいかない場合や、既存の設定を手動で変更したい場合の手順です。

#### 手順 2-1: サービスアカウントの取得
1. Firebase コンソールを開き、「プロジェクトの設定（歯車アイコン）」>「サービスアカウント」タブへ移動します。
2. 「新しい秘密鍵の生成」ボタンをクリックし、JSONファイルをダウンロードします。

#### 手順 2-2: GitHub Secretsの登録
1. GitHubリポジトリの「Settings」>「Secrets and variables」>「Actions」を開きます。
2. 「New repository secret」をクリックします。
3. 以下の内容で保存します：
   - **Name**: `FIREBASE_SERVICE_ACCOUNT_あなたのプロジェクトID` （例: `FIREBASE_SERVICE_ACCOUNT_MY_APP_123`）
   - **Secret**: ダウンロードしたJSONファイルの中身をすべてコピー＆ペーストします。

#### 手順 2-3: プロジェクト内のファイル更新
リポジトリ内の以下のファイルをご自身のプロジェクトIDに合わせて書き換えます。

1. **`.firebaserc`**
   `<FIREBASE_PROJECT_ID>` の部分を実際のプロジェクトIDに変更します。
   ```json
   {
     "projects": {
       "default": "あなたのプロジェクトID"
     }
   }
   ```
2. **`.github/workflows/firebase-hosting-merge.yml`**
   ファイル内の `<PROJECT_ID>` を実際のプロジェクトIDに変更します。
   ```yaml
   # 変更前
   projectId: <PROJECT_ID>
   
   # 変更後
   projectId: あなたのプロジェクトID
   ```

---

### デプロイの確認
すべての設定が完了したら、`main` ブランチに変更をプッシュしてください。
GitHub Actions が実行され、自動的に Firebase Hosting にデプロイされます。GitHub の「Actions」タブからビルドとデプロイの進行状況を確認できます。
