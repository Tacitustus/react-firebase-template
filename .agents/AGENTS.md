### コーディング規約
- TypeScript 厳格モード（strict: true）
- any 型の使用は一切禁止。unknown + 型ガードを用いること
- eslint-disable-next-line 等によるLint警告の無視は一切禁止。エラーは根本から解決すること
- 関数はすべてアロー関数で定義する（export const MyComponent = () => {} 形式）
- コメントは処理単位で非常に細かく親切に日本語で書く
  例: // ユーザー一覧を取得し、アクティブなユーザーのみをフィルタリングする
- JSDoc は以下の単位で必ず記述する：
  - すべてのコンポーネント（@description, @param, @returns, @example）
  - すべてのカスタムフック（@description, @returns, @example）
  - すべての汎用ユーティリティ関数（@description, @param, @returns）
  - 型定義（@description）
- インポート順序: React → 外部ライブラリ → 内部モジュール（絶対パス） → 相対パス → 型 → スタイル
- パスエイリアス（@/）を使用する

### デザイン規約
- アトミックデザインの5階層（atoms / molecules / organisms / templates / pages）を厳守する
- TailwindCSS のユーティリティクラスを優先し、カスタムCSSは最小限にする
- ダークモード対応を考慮した設計にする（TailwindCSS の dark: プレフィックス）
- レスポンシブデザインを前提とする（モバイルファースト）
- モダンで洗練されたデザイン: グラスモーフィズム、グラデーション、マイクロアニメーションを適切に活用する
- カラーパレットは tailwind.config.ts で一元管理する

### ファイル命名規約
- コンポーネント: PascalCase（例: UserCard.tsx）
- フック: camelCase、use プレフィックス（例: useAuth.ts）
- ユーティリティ: camelCase（例: formatDate.ts）
- 型定義: PascalCase（例: User.ts）
- 定数: UPPER_SNAKE_CASE のエクスポート名、camelCase のファイル名

### テスト規約
- 新規コンポーネントには必ず基本的なレンダリングテストを書くこと（Vitest + React Testing Library）

### Git規約
- コミットメッセージは Conventional Commits に従う（feat:, fix:, docs:, style:, refactor:, test:, chore:）
- 日本語の説明を括弧内に添える（例: feat: add login form (ログインフォームを追加)）

### タスク完了時の確認事項（必須）
タスクが完了したら、以下を必ず実施すること：
1. BLUEPRINT.md を再読し、仕様との乖離がないことを確認する
2. AGENTS.md を再読し、コーディング規約・デザイン規約・命名規約をすべて守れていることを確認する
3. ESLint / Prettier エラーが 0 件であることを確認する（npm run lint で確認）
4. TypeScript コンパイルエラーが 0 件であることを確認する（npx tsc --noEmit で確認）
5. ビルドが成功することを確認する（npm run build で確認）
6. 以下の形式で報告する：
   ```
   ## ✅ タスク完了報告
   ### 修正内容
   - （変更点を箇条書き）

   ### 仕様書チェック（BLUEPRINT.md）
   - ✅ / ❌ 各要件の適合状況

   ### コーディング規約チェック（AGENTS.md）
   - ✅ any 未使用
   - ✅ eslint-disable-next-line 未使用
   - ✅ アロー関数のみ使用
   - ✅ JSDoc 記述済み
   - ✅ 日本語コメント記述済み
   - ✅ アトミックデザイン準拠
   - ✅ ESLint エラー 0 件
   - ✅ Prettier フォーマット済み
   - ✅ TypeScript コンパイルエラー 0 件
   - ✅ ビルド成功
   ```
