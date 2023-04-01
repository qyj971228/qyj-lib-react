module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect' // eslint-plugin-react react版本警告
    }
  },

  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:react/jsx-runtime',
    'plugin:storybook/recommended'
  ],
  overrides: [],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  ignorePatterns: ['./dist', './node_modules', './coverage', '/storybook-static'],
  // off: 关闭 error: 显示警告
  rules: {
    'multiline-ternary': 'off',
    // 函数括号前插入空格
    '@typescript-eslint/space-before-function-paren': 'off',
    // 未使用导入
    '@typescript-eslint/no-unused-vars': 'off',
    // 类型导入检查
    '@typescript-eslint/consistent-type-imports': 'off',
    // 引号 off: 单引号
    '@typescript-eslint/quotes': 'off',
    // 函数返回
    '@typescript-eslint/explicit-function-return-type': 'off',
    // 布尔值严格比较
    '@typescript-eslint/strict-boolean-expressions': [
      'off',
      {
        allowString: true,
        allowNumber: true,
        allowNullableObject: true,
        allowNullableBoolean: true,
        allowNullableNumber: false,
        allowNullableString: true,
        allowAny: false
      }
    ]
  }
}
