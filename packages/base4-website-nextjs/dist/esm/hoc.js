import { a as _regeneratorRuntime } from './chunk-fd635e66.js';
import { c as _objectSpread, d as _asyncToGenerator, e as _classCallCheck, f as _createClass, g as _possibleConstructorReturn, h as _getPrototypeOf, i as _inherits, j as _taggedTemplateLiteral } from './chunk-cfc9ba70.js';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { componentDisplayName, extractFragmentData, httpErrors, sectionPath } from './utils.js';
import gql from 'graphql-tag';
import { RelCanonical, PageTitle, MetaDescription } from './components.js';
import { redirect } from './routing.js';
import 'moment';
import 'object-path';
import 'classnames';
import 'next/head';
import './chunk-e05239f9.js';

var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WithDynamicPageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformContentPage"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"teaser"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"alias"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"body"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":146}};
    doc.loc.source = {"body":"fragment WithDynamicPageFragment on PlatformContentPage {\n  id\n  name\n  type\n  teaser\n  alias\n  body\n  metadata {\n    title\n    description\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};

var withRequestOrigin = (function (Page) {
  var WithRequestOrigin =
  /*#__PURE__*/
  function (_Component) {
    _inherits(WithRequestOrigin, _Component);

    function WithRequestOrigin() {
      _classCallCheck(this, WithRequestOrigin);

      return _possibleConstructorReturn(this, _getPrototypeOf(WithRequestOrigin).apply(this, arguments));
    }

    _createClass(WithRequestOrigin, [{
      key: "render",

      /**
       *
       */
      value: function render() {
        return React.createElement(Page, this.props);
      }
    }], [{
      key: "getInitialProps",

      /**
       *
       */
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee(ctx) {
          var pageProps, req, requestOrigin;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!Page.getInitialProps) {
                    _context.next = 4;
                    break;
                  }

                  _context.next = 3;
                  return Page.getInitialProps(ctx);

                case 3:
                  pageProps = _context.sent;

                case 4:
                  req = ctx.req;
                  requestOrigin = req ? "".concat(req.protocol, "://").concat(req.get('host')) : "".concat(window.location.protocol, "//").concat(window.location.host);
                  return _context.abrupt("return", _objectSpread({}, pageProps, {
                    requestOrigin: requestOrigin
                  }));

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    return WithRequestOrigin;
  }(Component);

  WithRequestOrigin.displayName = "WithRequestOrigin(".concat(componentDisplayName(Page), ")");
  WithRequestOrigin.propTypes = _objectSpread({}, Page.propTypes, {
    requestOrigin: PropTypes.string.isRequired
  });
  return WithRequestOrigin;
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    query WithDynamicPage($input: PlatformContentPageQueryOne!) {\n      platformContentPage(input: $input) {\n        ...WithDynamicPageFragment\n        ", "\n      }\n    }\n    ", "\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
/**
 *
 * @param {object} params
 * @param {string|object} params.fragment The query fragment, either as
 *                                        a string or a gql AST object.
 */

var buildQuery = function buildQuery(_ref) {
  var fragment = _ref.fragment;

  var _extractFragmentData = extractFragmentData({
    fragment: fragment
  }),
      spreadFragmentName = _extractFragmentData.spreadFragmentName,
      processedFragment = _extractFragmentData.processedFragment;

  return gql(_templateObject(), spreadFragmentName, doc, processedFragment);
};
/**
 *
 * @param {object} Page
 * @param {object} options
 * @param {?string|object} options.fragment
 */

var withDynamicPage = (function (Page) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    fragment: null
  };

  var WithDynamicPage =
  /*#__PURE__*/
  function (_Component) {
    _inherits(WithDynamicPage, _Component);

    function WithDynamicPage() {
      _classCallCheck(this, WithDynamicPage);

      return _possibleConstructorReturn(this, _getPrototypeOf(WithDynamicPage).apply(this, arguments));
    }

    _createClass(WithDynamicPage, [{
      key: "render",

      /**
       *
       */
      value: function render() {
        var _this$props = this.props,
            requestOrigin = _this$props.requestOrigin,
            page = _this$props.page;
        var metadata = page.metadata,
            alias = page.alias;
        return React.createElement(React.Fragment, null, React.createElement(PageTitle, {
          value: metadata.title
        }), React.createElement(MetaDescription, {
          value: metadata.description
        }), React.createElement(RelCanonical, {
          origin: requestOrigin,
          pathname: alias
        }), React.createElement(Page, this.props));
      }
    }], [{
      key: "getInitialProps",

      /**
       *
       */
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee(ctx) {
          var pageProps, fragment, query, apollo, alias, input, variables, _ref2, data, platformContentPage;

          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!Page.getInitialProps) {
                    _context.next = 4;
                    break;
                  }

                  _context.next = 3;
                  return Page.getInitialProps(ctx);

                case 3:
                  pageProps = _context.sent;

                case 4:
                  fragment = options.fragment;
                  query = ctx.query, apollo = ctx.apollo; // Get the content alias from the page query

                  alias = query.alias;

                  if (alias) {
                    _context.next = 9;
                    break;
                  }

                  throw httpErrors.notFound('No content page alias was provided.');

                case 9:
                  // Query for the content page object using the alias, via the inject apollo client.
                  input = {
                    alias: alias
                  };
                  variables = {
                    input: input
                  };
                  _context.next = 13;
                  return apollo.query({
                    query: buildQuery({
                      fragment: fragment
                    }),
                    variables: variables
                  });

                case 13:
                  _ref2 = _context.sent;
                  data = _ref2.data;
                  platformContentPage = data.platformContentPage;

                  if (platformContentPage) {
                    _context.next = 18;
                    break;
                  }

                  throw httpErrors.notFound("No content page was found for alias '".concat(alias, "'"));

                case 18:
                  return _context.abrupt("return", _objectSpread({
                    page: platformContentPage
                  }, pageProps));

                case 19:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    return WithDynamicPage;
  }(Component);

  WithDynamicPage.displayName = "WithDynamicPage(".concat(componentDisplayName(Page), ")");
  WithDynamicPage.propTypes = _objectSpread({}, Page.propTypes, {
    page: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      teaser: PropTypes.string,
      body: PropTypes.string,
      alias: PropTypes.string.isRequired,
      metadata: PropTypes.object
    }).isRequired
  });
  return withRequestOrigin(WithDynamicPage);
});

var doc$1 = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WithPlatformContentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformContent"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"teaser"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"body"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"redirectTo"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"canonicalPath"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fields"},"value":{"kind":"Variable","name":{"kind":"Name","value":"canonicalFields"}}}]}}],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"primarySection"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"alias"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":253}};
    doc$1.loc.source = {"body":"fragment WithPlatformContentFragment on PlatformContent {\n  id\n  name\n  type\n  teaser\n  body\n  redirectTo\n  canonicalPath(input: { fields: $canonicalFields })\n  metadata {\n    title\n    description\n  }\n  primarySection {\n    id\n    name\n    alias\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n    query WithPlatformContent($input: RootPlatformContentQueryOne!, $canonicalFields: [PlatfromContentPathField]!) {\n      platformContent(input: $input) {\n        ...WithPlatformContentFragment\n        ", "\n      }\n    }\n    ", "\n    ", "\n  "]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
/**
 *
 * @param {object} params
 * @param {string|object} params.fragment The query fragment, either as
 *                                        a string or a gql AST object.
 */

var buildQuery$1 = function buildQuery(_ref) {
  var fragment = _ref.fragment;

  var _extractFragmentData = extractFragmentData({
    fragment: fragment
  }),
      spreadFragmentName = _extractFragmentData.spreadFragmentName,
      processedFragment = _extractFragmentData.processedFragment;

  return gql(_templateObject$1(), spreadFragmentName, doc$1, processedFragment);
};
/**
 *
 * @param {object} content
 * @param {object} ctx
 * @param {?object} ctx.res
 * @param {string} ctx.asPath
 */

var checkContent = function checkContent(content, _ref2) {
  var res = _ref2.res,
      asPath = _ref2.asPath;
  var redirectTo = content.redirectTo,
      canonicalPath = content.canonicalPath;

  if (redirectTo) {
    redirect({
      res: res,
      route: redirectTo
    });
  } else if (canonicalPath !== asPath) {
    redirect({
      res: res,
      route: canonicalPath
    });
  }
};
/**
 *
 * @param {object} Page
 * @param {object} options
 * @param {?string|object} options.fragment
 */

var withPlatformContent = (function (Page) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    fragment: null,
    canonicalFields: ['sectionAlias', 'type', 'id', 'slug']
  };

  var WithPlatformContent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(WithPlatformContent, _Component);

    function WithPlatformContent() {
      _classCallCheck(this, WithPlatformContent);

      return _possibleConstructorReturn(this, _getPrototypeOf(WithPlatformContent).apply(this, arguments));
    }

    _createClass(WithPlatformContent, [{
      key: "render",

      /**
       *
       */
      value: function render() {
        var _this$props = this.props,
            requestOrigin = _this$props.requestOrigin,
            canonicalPath = _this$props.canonicalPath,
            content = _this$props.content;
        var metadata = content.metadata;
        return React.createElement(React.Fragment, null, React.createElement(PageTitle, {
          value: metadata.title
        }), React.createElement(MetaDescription, {
          value: metadata.description
        }), React.createElement(RelCanonical, {
          origin: requestOrigin,
          pathname: canonicalPath
        }), React.createElement(Page, this.props));
      }
    }], [{
      key: "getInitialProps",

      /**
       *
       */
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee(ctx) {
          var pageProps, fragment, canonicalFields, query, apollo, id, input, variables, _ref3, data, platformContent, canonicalPath;

          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!Page.getInitialProps) {
                    _context.next = 4;
                    break;
                  }

                  _context.next = 3;
                  return Page.getInitialProps(ctx);

                case 3:
                  pageProps = _context.sent;

                case 4:
                  fragment = options.fragment, canonicalFields = options.canonicalFields;
                  query = ctx.query, apollo = ctx.apollo; // Get the content id from the page query

                  id = query.id;

                  if (id) {
                    _context.next = 9;
                    break;
                  }

                  throw httpErrors.notFound('No content ID was provided.');

                case 9:
                  // Query for the content object using the id, via the inject apollo client.
                  input = {
                    id: Number(id)
                  }; // Pass the canonical args to generate the content's canonical (route) path.

                  variables = {
                    input: input,
                    canonicalFields: canonicalFields
                  };
                  _context.next = 13;
                  return apollo.query({
                    query: buildQuery$1({
                      fragment: fragment
                    }),
                    variables: variables
                  });

                case 13:
                  _ref3 = _context.sent;
                  data = _ref3.data;
                  platformContent = data.platformContent;

                  if (platformContent) {
                    _context.next = 18;
                    break;
                  }

                  throw httpErrors.notFound("No content was found for id '".concat(id, "'"));

                case 18:
                  // Check content for internal/external redirects, etc.
                  checkContent(platformContent, ctx);
                  canonicalPath = platformContent.canonicalPath;
                  return _context.abrupt("return", _objectSpread({
                    content: platformContent,
                    canonicalPath: canonicalPath
                  }, pageProps));

                case 21:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    return WithPlatformContent;
  }(Component);

  WithPlatformContent.displayName = "WithPlatformContent(".concat(componentDisplayName(Page), ")");
  WithPlatformContent.propTypes = _objectSpread({}, Page.propTypes, {
    canonicalPath: PropTypes.string.isRequired,
    content: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      teaser: PropTypes.string,
      body: PropTypes.string,
      redirectTo: PropTypes.string,
      metadata: PropTypes.object,
      canonicalPath: PropTypes.string.isRequired
    }).isRequired
  });
  return withRequestOrigin(WithPlatformContent);
});

var doc$2 = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WithWebsiteSectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebsiteSection"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"alias"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":135}};
    doc$2.loc.source = {"body":"fragment WithWebsiteSectionFragment on WebsiteSection {\n  id\n  name\n  description\n  alias\n  metadata {\n    title\n    description\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n    query WithWebsiteSection($input: WebsiteSectionAliasQueryInput!) {\n      websiteSectionAlias(input: $input) {\n        ...WithWebsiteSectionFragment\n        ", "\n      }\n      websiteSectionRedirect(input: $input) {\n        id\n        alias\n      }\n    }\n    ", "\n    ", "\n  "]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * Builds the website section GraphQL query.
 */

var buildQuery$2 = function buildQuery(_ref) {
  var fragment = _ref.fragment;

  var _extractFragmentData = extractFragmentData({
    fragment: fragment
  }),
      spreadFragmentName = _extractFragmentData.spreadFragmentName,
      processedFragment = _extractFragmentData.processedFragment;

  return gql(_templateObject$2(), spreadFragmentName, doc$2, processedFragment);
};
var withWebsiteSection = (function (Page) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    routePrefix: 'section',
    fragment: null
  };

  var WithWebsiteSection =
  /*#__PURE__*/
  function (_Component) {
    _inherits(WithWebsiteSection, _Component);

    function WithWebsiteSection() {
      _classCallCheck(this, WithWebsiteSection);

      return _possibleConstructorReturn(this, _getPrototypeOf(WithWebsiteSection).apply(this, arguments));
    }

    _createClass(WithWebsiteSection, [{
      key: "render",

      /**
       *
       */
      value: function render() {
        var _this$props = this.props,
            requestOrigin = _this$props.requestOrigin,
            canonicalPath = _this$props.canonicalPath,
            section = _this$props.section;
        var metadata = section.metadata;
        return React.createElement(React.Fragment, null, React.createElement(PageTitle, {
          value: metadata.title
        }), React.createElement(MetaDescription, {
          value: metadata.description
        }), React.createElement(RelCanonical, {
          origin: requestOrigin,
          pathname: canonicalPath
        }), React.createElement(Page, this.props));
      }
    }], [{
      key: "getInitialProps",

      /**
       *
       */
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee(ctx) {
          var pageProps, fragment, routePrefix, query, apollo, res, alias, input, variables, _ref2, data, websiteSectionAlias, websiteSectionRedirect, canonicalPath, redirectAlias, path;

          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!Page.getInitialProps) {
                    _context.next = 4;
                    break;
                  }

                  _context.next = 3;
                  return Page.getInitialProps(ctx);

                case 3:
                  pageProps = _context.sent;

                case 4:
                  fragment = options.fragment, routePrefix = options.routePrefix;
                  query = ctx.query, apollo = ctx.apollo, res = ctx.res; // Get the section alias from the page query.
                  // Note: the section alias is required for this HOC to function properly.

                  alias = query.alias;

                  if (alias) {
                    _context.next = 9;
                    break;
                  }

                  throw httpErrors.notFound('No website section alias was provided.');

                case 9:
                  // Query for the website section using the alias, via the injected apollo client.
                  input = {
                    alias: alias
                  };
                  variables = {
                    input: input
                  };
                  _context.next = 13;
                  return apollo.query({
                    query: buildQuery$2({
                      fragment: fragment
                    }),
                    variables: variables
                  });

                case 13:
                  _ref2 = _context.sent;
                  data = _ref2.data;
                  websiteSectionAlias = data.websiteSectionAlias, websiteSectionRedirect = data.websiteSectionRedirect;

                  if (!websiteSectionAlias) {
                    _context.next = 19;
                    break;
                  }

                  // The website section was found. Return it allong with the page props.
                  canonicalPath = sectionPath(alias, routePrefix);
                  return _context.abrupt("return", _objectSpread({
                    section: websiteSectionAlias,
                    canonicalPath: canonicalPath
                  }, pageProps));

                case 19:
                  if (!(websiteSectionRedirect && websiteSectionRedirect.alias)) {
                    _context.next = 24;
                    break;
                  }

                  // A redirect was found for this section alias. Force a redirect.
                  redirectAlias = websiteSectionRedirect.alias;
                  path = sectionPath(redirectAlias, routePrefix);
                  redirect({
                    res: res,
                    router: null,
                    route: path
                  });
                  return _context.abrupt("return", _objectSpread({
                    section: {},
                    canonicalPath: path
                  }, pageProps));

                case 24:
                  throw httpErrors.notFound("No website section was found for alias '".concat(alias, "'"));

                case 25:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    return WithWebsiteSection;
  }(Component);

  WithWebsiteSection.displayName = "WithWebsiteSection(".concat(componentDisplayName(Page), ")");
  WithWebsiteSection.propTypes = _objectSpread({}, Page.propTypes, {
    canonicalPath: PropTypes.string.isRequired,
    section: PropTypes.shape({
      id: PropTypes.number.isRequired,
      alias: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      seoTitle: PropTypes.string
    }).isRequired
  });
  return withRequestOrigin(WithWebsiteSection);
});

export { withDynamicPage, withPlatformContent, withRequestOrigin, withWebsiteSection };
