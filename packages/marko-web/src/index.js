const http = require('http');
const { createTerminus } = require('@godaddy/terminus');
const { isFunction: isFn } = require('@base-cms/utils');
const express = require('./express');

const startServer = async ({
  assetsDir,
  siteConfig,
  port = 4008,
  routes,
  graphqlUri,
  apolloConfig,
  markoConfig,
  timeout = 1000,
  signals = ['SIGTERM', 'SIGINT', 'SIGHUP', 'SIGQUIT'],
  healthCheckPath = '/_health',
  onSignal,
  onShutdown,
  onStart,
  onHealthCheck,
} = {}) => {
  if (!assetsDir) throw new Error('The assets directory is required.');
  const app = express({
    assetsDir,
    siteConfig,
    graphqlUri,
    apolloConfig,
    markoConfig,
  });

  // Load website routes.
  if (!isFn(routes)) throw new Error('A routes function is required.');
  routes(app);

  // Await required services here...
  if (isFn(onStart)) await onStart(app);

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
      if (err) { rej(err); } else { res(this); }
    });
  });
};

module.exports = {
  startServer,
};