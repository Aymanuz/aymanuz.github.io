const config = require('./themes/blowfish/tailwind.config');

config.theme.screens = {
  'sm': '640px',
  'md': '853px',
  'lg': '1224px',
  'xl': '1380px',
  '2xl': '1736px',
};

module.exports = config;
