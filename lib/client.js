const { Client } = require('@elastic/elasticsearch');

let count = 0;

module.exports = app => {
  app.addSingleton('elasticsearchClient', createClient);
  app.logger.info(app.config.elasticsearchClient);
};

function createClient(config, app) {
  const client = new Client(config);

  app.beforeStart(async () => {
    let index = count++;
    await client.ping((error) => {
      if (error) {
        app.coreLogger.info('elasticsearch init fail!');
      } else {
        app.coreLogger.info(`[egg-elasticsearch-client] instance[${index}] is ready.`);
      }
    });
  });

  return client;
}
