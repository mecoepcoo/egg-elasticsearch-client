'use strict';

const client = require('./lib/client');

module.exports = agent => {
  if (agent.config.elasticsearchClient.eggAgent) client(agent);
};
