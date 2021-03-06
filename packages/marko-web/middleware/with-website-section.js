const { asyncRoute, isFunction: isFn } = require('@base-cms/utils');
const { websiteSection: loader } = require('@base-cms/web-common/page-loaders');
const { blockWebsiteSection: queryFactory } = require('@base-cms/web-common/query-factories');
const PageNode = require('./page-node');

module.exports = ({
  template,
  queryFragment,
  aliasResolver,
  redirectOnPathMismatch = true,
} = {}) => asyncRoute(async (req, res) => {
  const alias = isFn(aliasResolver) ? await aliasResolver(req, res) : req.params.alias;
  const { apollo } = req;
  const cleanedAlias = alias.replace(/\/+$/, '').replace(/^\/+/, '');

  const section = await loader(apollo, { alias: cleanedAlias });
  const { redirectTo, canonicalPath } = section;
  if (redirectTo) {
    return res.redirect(301, redirectTo);
  }
  if (redirectOnPathMismatch && canonicalPath !== req.path) {
    return res.redirect(301, canonicalPath);
  }
  const pageNode = new PageNode(apollo, {
    queryFactory,
    queryFragment,
    variables: { input: { alias: cleanedAlias } },
    resultField: 'websiteSectionAlias',
  });
  return res.marko(template, { ...section, pageNode });
});
