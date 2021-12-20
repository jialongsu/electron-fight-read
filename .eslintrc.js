module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: [".*", "webpack", "public", "node_modules", "dist", "*.js"], // 忽略指定文件夹或文件
  settings: {
    //解决路径引用ts文件报错的问题
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      },
      // 解决tsconfig下的path别名导致eslint插件无法解决的bug
      'typescript': {
        'alwaysTryTypes': true
      }
    }
  },
  rules: {
    // 在这里添加需要覆盖的规则
    "react/function-component-definition": 0,
    "quotes": ["error", "single"],
    "jsx-quotes": ["error", "prefer-single"],
    "@typescript-eslint/no-floating-promises": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unused-expressions": 0,
    "no-param-reassign": 0,
    "max-len": ["error", { "code": 120 }],
    "react/no-array-index-key": 0,
    "react/require-default-props": 0,
    "react/jsx-props-no-spreading": 0,
    "max-classes-per-file": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
  }
};