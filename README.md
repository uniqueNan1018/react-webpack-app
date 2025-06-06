# React + Webpack + TypeScript Starter Project

このプロジェクトは、React、Webpack、TypeScript を使用したフロントエンドアプリケーションのスターターテンプレートです。

## ディレクトリ構成
```bash
react-webpack-app/
├── src/
│ ├── components/ # 再利用可能なコンポーネント
│ ├── pages/ # 各ページごとのコンポーネント
│ ├── styles/ # SCSSなどのスタイルファイル
│ ├── App.tsx # ルートコンポーネント
│ └── index.tsx # エントリーポイント
├── public/
│ └── index.html # HTMLテンプレート
├── test/ # テストコード
├── webpack/ # 環境ごとのWebpack設定
│ ├── webpack.common.js
│ ├── webpack.dev.js
│ ├── webpack.prod.js
│ └── webpack.stg.js
├── .babelrc # Babel設定
├── tsconfig.json # TypeScript設定
├── jest.config.ts # Jest設定
├── package.json
└── README.md
```

## 使用技術

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Webpack](https://webpack.js.org/)
- [SCSS](https://sass-lang.com/)
- [react-slick](https://react-slick.neostack.com/)（スライダー）
- [MUI](https://mui.com/)（UIライブラリ）
- [Jest](https://jestjs.io/ja/)（ユニットテスト）

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm start

# 本番ビルド
npm run build

# ステージングビルド
npm run build:stg

# テストの実行
npm test

```

## 主要機能
- SPA構成：react-routerなどの導入も容易
- SCSS対応：コンポーネントごとにスタイルを管理可能
- スライダー導入済み：react-slick によるカルーセル表示
- MUIによるUI構築：ボタンなどの共通UI部品が簡単に使える
- ツリーデータ構造：ネストされたデータ表示も可能

## テスト
- 本プロジェクトには `Jest` によるユニットテストが含まれています。

## 備考
- env を追加することで環境ごとの設定も可能です。
- Webpackの設定は webpack/ ディレクトリにモジュール化されています。

## 今後の拡張例
- eact Router を導入してルーティング対応
- Redux や Zustand 等で状態管理
- ESLint + Prettier によるコード整形ルール


