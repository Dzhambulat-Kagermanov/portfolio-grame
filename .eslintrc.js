module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    // Размер отступов в jsx
    'react/jsx-indent': [2, 2],
    // Размер отступов в пропсах
    'react/jsx-indent-props': [2, 2],
    // Отступы в файлах
    indent: [2, 2],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    // Не использовать абсолютные пути
    'import/no-unresolved': 'off',
    // Использовать только экспорты по дефолту
    'import/prefer-default-export': 'off',
    // Не используемые переменные
    'no-unused-vars': 'warn',
    //
    'react/require-default-props': 'off',
    // Импорт react в файл обязателен
    'react/react-in-jsx-scope': 'off',
    // Использование spread операторов в пропсах
    'react/jsx-props-no-spreading': 'warn',
    // Использование обычных функций вместо стрелочных
    'react/function-component-definition': 'off',
    //
    'no-shadow': 'off',
    // Писать расширения файлов в импортах и экспортах
    'import/extensions': 'off',
    //
    'import/no-extraneous-dependencies': 'off',
    // Запретить использование _ в переменных
    'no-underscore-dangle': 'off',
    // Использование скобок для параметров функции
    'arrow-parens': ['warn', 'as-needed'],
    // Перенос строк
    'linebreak-style': 0,
    // Использование ковычек
    semi: [2, 'never'],
    // Подсветка пропущенных переводов в jsx
    'i18next/no-literal-string': ['error', { markupOnly: true }],
  },
  globals: {
    __IS_DEV__: true,
  },
}
