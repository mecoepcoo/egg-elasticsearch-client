'use strict';

const client = require('./lib/client');

module.exports = agent => {
  if (app.config.elasticsearchClient.eggAgent) client(agent);
};
