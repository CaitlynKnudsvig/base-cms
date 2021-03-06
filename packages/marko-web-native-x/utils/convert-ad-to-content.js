module.exports = (ad = {}, { sectionName = 'Sponsored' } = {}) => {
  const { campaign, creative, image } = ad;
  return {
    id: campaign.id,
    name: creative.title,
    shortName: creative.title,
    typeTitled: 'Text Ad',
    type: 'text-ad',
    teaser: creative.teaser,
    published: campaign.createdAt,
    canonicalPath: ad.href, // @deprecated. Use siteContext.path instead
    siteContext: {
      path: ad.href,
      canonicalUrl: ad.href,
      __typename: 'ContentSiteContext',
    },
    primaryImage: {
      id: image.id,
      alt: creative.title,
      src: image.src,
      __typename: 'AssetImage',
    },
    primarySection: {
      name: sectionName,
      fullName: sectionName,
      __typename: 'WebsiteSection',
    },
    __typename: 'ContentTextAd',
  };
};
