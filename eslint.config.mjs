import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'
import pluginReact from 'eslint-plugin-react'
import prettier from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      'prettier/prettier': [
        'error',
        { semi: false, singleQuote: true, trailingComma: 'none' }
      ] // Configura o Prettier
    },
    languageOptions: {
      parser: parser, // Adiciona o parser para TypeScript
      parserOptions: {
        project: './tsconfig.json', // Certifique-se de ter um tsconfig.json na raiz
        tsconfigRootDir: './'
      },
      globals: globals.browser // Adiciona variáveis globais do browser
    },
    plugins: {
      prettier: ['prettier'] // Adiciona o plugin do Prettier
    },
  },
  {
    ...pluginJs.configs.recommended, // Regras recomendadas do ESLint para JS
  },
  {
    ...tseslint.configs.recommended, // Regras recomendadas do TypeScript
  },
  {
    ...pluginReact.configs.recommended, // Regras recomendadas do React
  },
  {
    ...prettier, // Desativa regras conflitantes com Prettier
  }
]
