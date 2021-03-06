const { get } = require('@base-cms/object-path');
const { asyncRoute, isFunction: isFn } = require('@base-cms/utils');
const { content: loader } = require('@base-cms/web-common/page-loaders');
const { blockContent: queryFactory } = require('@base-cms/web-common/query-factories');
const PageNode = require('./page-node');

module.exports = ({
  template,
  queryFragment,
  idResolver,
  redirectOnPathMismatch = true,
} = {}) => asyncRoute(async (req, res) => {
  const id = isFn(idResolver) ? await idResolver(req, res) : req.params.id;
  const { apollo } = req;

  const additionalInput = {};
  if (req.cookies['preview-mode'] || req.query['preview-mode']) {
    additionalInput.status = 'any';
  } else {
    additionalInput.since = Date.now();
  }
  const content = await loader(apollo, { id, additionalInput });
  const { redirectTo } = content;
  const path = get(content, 'siteContext.path');
  if (redirectTo) {
    return res.redirect(301, redirectTo);
  }
  if (redirectOnPathMismatch && path !== req.path) {
    const pathTo = req.query['preview-mode'] ? `${path}?preview-mode=true` : path;
    return res.redirect(301, pathTo);
  }
  const pageNode = new PageNode(apollo, {
    queryFactory,
    queryFragment,
    variables: { input: { id: Number(id), ...additionalInput } },
    resultField: 'content',
  });
  return res.marko(template, { ...content, pageNode });
});
