# 新しい画面開発手順書

本プロジェクトにおける、新しいページ（画面）を追加する際の基本手順を以下に示します。

---

## 1. ページコンポーネントの作成

`src/pages/` 以下に新しいファイルを作成します。

例：`src/pages/About.tsx`

```tsx
import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h1>Aboutページ</h1>
    </div>
  );
};

export default About;

```
## 2. スタイルの追加（任意）
- 必要に応じて、SCSSファイルを作成し、読み込みます。

例：`src/pages/About.scss`

```scss
.about-container {
  padding: 20px;
  font-size: 16px;
}
```
```tsx
import "./About.scss"; // About.tsx 内で読み込み
```

## 3. ルーティングに追加（必要な場合）
- もしルーティングを実装している場合は、React Router等の設定ファイルに画面を追加します。

```tsx
/** src/App.tsx に **/
const About = lazy(() => import('@pages/About'));

<Route path="/about" element={<About />} />
```

## 4. テストコードの作成
- test/ 以下にテストコードを作成します。

```tsx
/** test/About.test.tsx **/
import { render, screen } from "@testing-library/react";
import About from "../src/pages/About";

test("renders About page", () => {
  render(<About />);
  expect(screen.getByText("Aboutページ")).toBeInTheDocument();
});

```

## 5. ナビゲーションからリンク（任意）
- 必要に応じて、ヘッダーやメニューにリンクを追加します。

```tsx

<Link to="/about">About</Link>

```

## 6. 動作確認
- 開発サーバーで表示確認を行います。

```bath

npm start

```
※ブラウザで http://localhost:3001/about にアクセスして表示を確認してください。

### 補足説明
- ポート番号の指定方法
```js
/** webpack/webpack.dev.js に **/
devServer: {
    static: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    port: 3001, // ← ここで指定する 　
    open: true,
},

```

## まとめ：ファイル構成例

```bath
src/
├── pages/
│   ├── About.tsx
│   └── About.scss
test/
├── About.test.tsx

```
