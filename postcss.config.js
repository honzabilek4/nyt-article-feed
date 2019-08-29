/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

// Purge unused CSS
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Paths to all of the template files in the project
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.tsx',
  ],
  whitelist: ['html', 'body'],
  // Regular expression for extracting CSS classes
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production' ? [purgecss] : [],
  ],
};
