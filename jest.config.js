const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // next.config.jsとテスト環境用の.envファイルが配置されたディレクトリをセット。基本は"./"で良い。
  dir: "./",
});

// Jestのカスタム設定を設置する場所。従来のプロパティはここで定義。
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // jest.setup.jsを作成する場合のみ定義。
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  globalSetup: "<rootDir>/tests/setupEnv.ts", // 環境変数の利用
};

// createJestConfigを定義することによって、本ファイルで定義された設定がNext.jsの設定に反映されます
module.exports = createJestConfig(customJestConfig);