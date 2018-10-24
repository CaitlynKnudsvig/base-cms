'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('./chunk-efb9fd9b.js');
var __chunk_2 = require('./chunk-2c19305a.js');
var React = require('react');
var React__default = _interopDefault(React);
var App = require('next/app');
var App__default = _interopDefault(App);
var reactApollo = require('react-apollo');
require('@base-cms/base4-nextjs-apollo');
var __chunk_3 = require('./chunk-5ea90bae.js');

var WebsiteApp =
/*#__PURE__*/
function (_App) {
  __chunk_2._inherits(WebsiteApp, _App);

  function WebsiteApp() {
    __chunk_2._classCallCheck(this, WebsiteApp);

    return __chunk_2._possibleConstructorReturn(this, __chunk_2._getPrototypeOf(WebsiteApp).apply(this, arguments));
  }

  __chunk_2._createClass(WebsiteApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          apollo = _this$props.apollo,
          routeDefs = _this$props.routeDefs;
      return React__default.createElement(App.Container, null, React__default.createElement(__chunk_3.RoutingContext.Provider, {
        value: routeDefs
      }, React__default.createElement(reactApollo.ApolloProvider, {
        client: apollo
      }, React__default.createElement(Component, pageProps))));
    }
  }]);

  return WebsiteApp;
}(App__default);

exports.WebsiteApp = WebsiteApp;
