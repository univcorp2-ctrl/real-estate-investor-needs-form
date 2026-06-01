<!-- AI_README_SETUP_GUIDE_START -->
## 🧭 画像付き初期設定ガイド

![README 画像付き初期設定ガイド](docs/assets/readme-setup-guide.svg)

このリポジトリ **real-estate-investor-needs-form** を初めて開いた人は、まずここだけ見れば初期設定から実行、成果物確認まで進められます。

### 最初にやること

1. 必要なSecretや外部サービス設定を確認します。
2. GitHub Actions または README の実行手順に沿って動かします。
3. 実行ログと成果物を確認します。
4. エラー時は Actions の失敗ステップと Secret名を確認します。

### 詳しい画像付きガイド

- [docs/setup-visual-guide.md](docs/setup-visual-guide.md)
- [docs/image-generation-prompts.md](docs/image-generation-prompts.md)

> SecretやAPIキーの実値は、README、Issue、ログ、画像に絶対に貼らないでください。例では `********` または `YOUR_SECRET_HERE` を使います。

<!-- AI_README_SETUP_GUIDE_END -->


# 不動産投資家向け 買いニーズ Googleフォーム自動生成

Googleフォームで不動産投資家向けの「買いニーズ」を取得するためのフォームを、Google Apps Scriptで自動生成するリポジトリです。

フォームには、築年数、利回り、エリア、価格、自己資金、融資状況、許容リスク、NG条件、連絡方法など、案件紹介に必要な項目を網羅しています。

## できること

- 不動産投資家向け買いニーズフォームを自動作成
- 回答用Googleスプレッドシートを自動作成
- 回答後の投資家ランク判定に使える項目設計
- Apps Scriptに貼り付けるだけで運用開始
- GitHub Actionsでフォーム仕様の自動テスト
- Codespaces / devcontainerで編集環境を再現

## 最短セットアップ

1. Google Apps Scriptを開く
2. 新規プロジェクトを作成
3. `google-apps-script/CreateInvestorNeedsForm.gs` の内容を貼り付け
4. 関数 `createInvestorNeedsForm` を実行
5. 初回のみGoogleの権限を許可
6. 実行ログに出るフォームURLと回答スプレッドシートURLを開く

詳しい手順は [`docs/setup.md`](docs/setup.md) を見てください。

## 作成されるフォームの主なセクション

1. 基本情報
2. 購入経験・購入目的
3. 希望物件種別
4. 希望エリア
5. 価格・予算・資金計画
6. 利回り・収益条件
7. 許容リスク・NG条件
8. 案件紹介・連絡方法

## 主要ファイル

| ファイル | 内容 |
|---|---|
| `google-apps-script/CreateInvestorNeedsForm.gs` | Googleフォーム自動作成用Apps Script本体 |
| `src/formSpec.js` | フォーム仕様の構造化データ |
| `test/form_spec.test.js` | フォーム仕様の自動テスト |
| `scripts/lint.js` | 最低限の静的チェック |
| `.github/workflows/ci.yml` | GitHub Actions CI |
| `docs/setup.md` | 初期設定ガイド |
| `docs/architecture.md` | アーキテクチャ説明 |
| `docs/architecture.mmd` | Mermaid図 |

## 回答後の営業分類例

| ランク | 判定目安 |
|---|---|
| Aランク | 3か月以内に購入希望、予算明確、融資または現金の目処あり、意思決定が早い |
| Bランク | 半年以内に購入希望、条件は明確だが融資確認が必要 |
| Cランク | 情報収集中、条件が広い、購入時期が未定 |
| 特別対応 | 高額予算、現金購入、法人購入、継続購入希望、訳あり案件許容 |

## 本番運用に必要なもの

- Googleアカウント
- Google Apps Scriptの実行権限
- Googleフォーム・スプレッドシート作成権限

外部APIや有料サービスは不要です。

## 開発者向け

```bash
npm test
npm run lint
```

GitHub Actionsは `push`、`pull_request`、`workflow_dispatch` で実行されます。
