module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },
  plugins: ['vue', '@typescript-eslint', 'eslint-plugin-import'],
  rules: {
    'import/no-unresolved': 0,
    'import/extensions': 0, // use typescript resolver, doesn't need this rule
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'vue/comment-directive': 0,
    'vue/script-setup-uses-vars': 'error',
    'vue/multi-word-component-names': 0,
  },
};
