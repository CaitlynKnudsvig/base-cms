const { service } = require('@base-cms/micro');
const { stringify } = require('querystring');

const { name, version } = require('../package.json');
const fetch = require('./fetch');
const {
  connect,
  ping,
  retrieve,
  write,
} = require('./mongodb');

const { log } = console;

const sortObject = (object = {}) => {
  const keys = Object.keys(object).sort();
  return keys.reduce((obj, key) => ({ ...obj, [key]: object[key] }), {});
};

module.exports = service.json({
  init: async () => {
    log(`> Booting ${name} ${version}...`);
    log('> Connecting to MongoDB...');
    await connect();
  },
  ping,
  actions: {
    youtube: {
      /**
       * The Youtube Channel List API
       * @see https://developers.google.com/youtube/v3/docs/channels/list
       */
      channelList: async (params) => {
        const uri = 'https://www.googleapis.com/youtube/v3/channels';
        const {
          maxResults = 1,
          part = 'snippet',
          forUsername,
          id,
          ttl = 365 * 24 * 60 * 60,
          force = false,
        } = params;
        if (!forUsername && !id) throw new Error('A channel id or username is required.');

        const payload = {
          maxResults,
          part,
          ...(id && { id }),
          ...(forUsername && { forUsername }),
        };
        const url = `${uri}?${stringify(sortObject(payload))}`;
        const record = await retrieve(url);
        if (record && !force) return record.response;

        const response = await fetch(uri, payload);
        write(url, response, ttl);
        return response;
      },
      /**
       * The Youtube Playlist Items API
       * @see https://developers.google.com/youtube/v3/docs/playlistItems/list
       */
      playlistItems: async (params) => {
        const uri = 'https://www.googleapis.com/youtube/v3/playlistItems';
        const {
          maxResults = 10,
          part = 'snippet',
          playlistId,
          ttl = 24 * 60 * 60,
          force = false,
        } = params;
        if (!playlistId) throw new Error('A playlist id is required.');

        const payload = { maxResults, part, playlistId };
        const url = `${uri}?${stringify(sortObject(payload))}`;
        const record = await retrieve(url);
        if (record && !force) return record.response;

        const response = await fetch(uri, payload);
        write(url, response, ttl);
        return response;
      },
    },
  },
});
