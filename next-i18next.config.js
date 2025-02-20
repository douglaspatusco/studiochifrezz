const path = require('path')

module.exports = {
  i18n: {
    locales: ['pt', 'en'], // Define os idiomas disponíveis
    defaultLocale: 'pt' // Define o idioma padrão
  },
  localePath: path.resolve('./public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development' // Para recarregar no desenvolvimento
}
