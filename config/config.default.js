'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1541437229292_8585';
  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.cluster = {
    listen: {
      port: 80,
      hostname: '0.0.0.0',
    },
  };

  // add your config here
  config.middleware = [];

  return config;
};
