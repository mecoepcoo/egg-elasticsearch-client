const { Client } = require('@elastic/elasticsearch');

let count = 0;

function createClient(config, app) {
  const client = new Client(config);

  app.beforeStart(async () => {
    let index = count++;
    await client.ping({ requestTimeout: 1000 }, (error) => {
        if (error) {
          app.coreLogger.info('elasticsearch init fail!');
        } else {
          app.coreLogger.info(`[egg-elasticsearch] instance[${index}] is ready.`);
        }
      }
    );
  });

  return client;
}

module.exports = app => {
  app.addSingleton('elasticsearchClient', createClient);
};
