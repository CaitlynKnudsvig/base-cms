require('marko/node-require');
const http = require('http');
const path = require('path');
const { createTerminus } = require('@godaddy/terminus');
const { isFunction: isFn } = require('@base-cms/utils');
// const errorHandlers = require('./express/error-handlers');
const express = require('./express');
const loadTemplates = require('./utils/load-templates');

if (!process.env.LIVERELOAD_PORT) {
  process.env.LIVERELOAD_PORT = 5010;
}
const { env } = process;

process.on('unhandledRejection', (e) => { throw e; });

module.exports = async ({
  rootDir,
  templatePath = 'templates', // Where templates will be resolved from.
  customConfig,
  coreConfig,
  port = env.PORT || 5008,
  exposedPort = env.EXPOSED_PORT || env.PORT || 5008,
  graphqlUri = env.GRAPHQL_URI,
  tenantKey = env.TENANT_KEY,
  publicPath, // path to load public assets. will resolve from rootDir.
  onAsyncBlockError,

  // Terminus settings.
  timeout = 1000,
  signals = ['SIGTERM', 'SIGINT', 'SIGHUP', 'SIGQUIT'],
  healthCheckPath = '/_health',
  onSignal,
  onShutdown,
  onStart,
  onHealthCheck,
} = {}) => {
  if (!rootDir) throw new Error('The root project directory is required.');
  if (!templatePath) throw new Error('A newsletter template location is required.');
  if (!graphqlUri) throw new Error('The GraphQL API URL is required.');
  if (!tenantKey) throw new Error('A tenant key is required.');

  // Load the newsletter package file.
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const sitePackage = require(path.resolve(rootDir, 'package.json'));

  // Load newsletter marko templates.
  const templates = await loadTemplates({ rootDir, templatePath });

  const app = express({
    rootDir,
    templates,
    customConfig,
    coreConfig,
    graphqlUri,
    tenantKey,
    onAsyncBlockError,
    publicPath,
    sitePackage,
  });

  // Await required services here...
  if (isFn(onStart)) await onStart(app);

  // Apply error handlers.
  // errorHandlers(app, { template: errorTemplate, redirectHandler });

  const server = http.createServer(app);

  createTerminus(server, {
    timeout,
    signals,
    // Add health checks of services here...
    healthChecks: {
      [healthCheckPath]: async () => {
        if (isFn(onHealthCheck)) return onHealthCheck();
        return { ping: 'pong' };
      },
    },
    onSignal: async () => {
      // Stop required services here...
      if (isFn(onSignal)) await onSignal();
    },
    onShutdown: async () => {
      if (isFn(onShutdown)) await onShutdown();
    },
  });

  return new Promise((res, rej) => {
    server.listen(port, function listen(err) {
      if (err) {
        rej(err);
      } else {
        res(this);
        if (process.send) {
          process.send({
            event: 'ready',
            name: sitePackage.name,
            tenantKey,
            graphqlUri,
            location: `http://0.0.0.0:${exposedPort}`,
          });
        }
      }
    });
  }).catch(e => setImmediate(() => { throw e; }));
};
