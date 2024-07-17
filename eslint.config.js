import globals from 'globals';
import pluginJs from '@eslint/js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import stylistic from '@stylistic/eslint-plugin';

export default [
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
    jsx: true,
  }),
  pluginJs.configs.recommended,
  reactRecommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: {
      '@stylistic': stylistic,
    },
    languageOptions: {
      ...reactRecommended.languageOptions,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      '@stylistic/jsx-quotes': ['error', 'prefer-single'],
    },
  },
];
