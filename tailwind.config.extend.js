const config = require('./themes/blowfish/tailwind.config');

config.content.push('./content/_index.md');
console.log(config.content);


module.exports = config;
