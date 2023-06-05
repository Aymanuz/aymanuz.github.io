const config = require('./themes/blowfish/tailwind.config');

config.theme.screens = {
      'sm': '640px',
      'md': '853px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
};

config.content.push('./content/_index.md');
console.log(config.content);


module.exports = config;
