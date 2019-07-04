'use strict';

const client = require('./lib/client');

module.exports = app => {
  if (app.config.elasticsearchClient.app) client(app);
};
