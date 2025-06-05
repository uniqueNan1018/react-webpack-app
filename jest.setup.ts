// jest-dom のカスタムマッチャーを使えるようにする
import '@testing-library/jest-dom';

// コンソールエラーを見やすく（オプション）
global.console.error = (...args) => {
  if (/Warning.*not wrapped in act/.test(args[0])) {
    return; // テスト中の warning を抑制（必要に応じて）
  }
  console.warn(...args);
};

// 必要があれば fetch のモック（optional）
import 'whatwg-fetch';
