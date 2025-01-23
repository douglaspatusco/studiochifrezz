import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin' // Certifique-se do nome correto do pacote
import parser from '@typescript-eslint/parser'
import pluginReact from 'eslint-plugin-react'
import prettier from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: parser, // Adiciona o parser para TypeScript
      globals: globals.browser
    },
    plugins: {
      prettier: pluginPrettier // Adiciona o plugin do Prettier
    },
    rules: {
      'prettier/prettier': ['error', { semi: false, singleQuote: true }] // Configura o Prettier
    }
  },
  pluginJs.configs.recommended, // Regras recomendadas do ESLint para JS
  tseslint.configs.recommended, // Regras recomendadas do TypeScript
  pluginReact.configs.flat.recommended, // Regras recomendadas do React
  prettier // Desativa regras conflitantes com Prettier
]
