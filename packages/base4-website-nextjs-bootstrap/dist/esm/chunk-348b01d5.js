import classNames from 'classnames';
import { get, asArray } from '@base-cms/base4-website-nextjs/utils';
import React from 'react';
import PropTypes from 'prop-types';
import { CompanyNameLink, PrimarySectionNameLink, PublishedDate, Row, ShortNameLink } from '@base-cms/base4-website-nextjs/components/content';
import { a as ListGroupItem, b as ListGroup } from './chunk-3d4ab70f.js';
import { a as _extends, b as _objectWithoutProperties } from './chunk-2f5ab1ea.js';

var wrapperAttrs = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      modifier = _ref.modifier,
      content = _ref.content,
      className = _ref.className;

  var id = get(content, 'id');
  var type = get(content, 'type');
  return {
    'data-id': id,
    className: classNames('content', "content--".concat(modifier), "content--".concat(type), className)
  };
});

var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentListGroupItemStyleA"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformContent"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"shortName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"published"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"canonicalPath"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"primarySection"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"alias"},"arguments":[],"directives":[]}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformContentProduct"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"canonicalPath"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":258}};
    doc.loc.source = {"body":"fragment ContentListGroupItemStyleA on PlatformContent {\n  id\n  type\n  shortName\n  published\n  canonicalPath\n  primarySection {\n    id\n    name\n    alias\n  }\n  ... on PlatformContentProduct {\n    company {\n      id\n      name\n      canonicalPath\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};

var propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    shortName: PropTypes.string,
    canonicalPath: PropTypes.string,
    published: PropTypes.number,
    company: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      canonicalPath: PropTypes.string
    }),
    primarySection: PropTypes.shape({
      id: PropTypes.number,
      alias: PropTypes.string,
      name: PropTypes.string
    })
  })
};
var defaultProps = {
  content: {}
};

var ListGroupItemStyleA = function ListGroupItemStyleA(_ref) {
  var content = _ref.content;
  return React.createElement(ListGroupItem, wrapperAttrs({
    modifier: 'list-item',
    content: content
  }), React.createElement(ShortNameLink, {
    content: content,
    className: "mb-1"
  }), React.createElement(CompanyNameLink, {
    content: content,
    tag: "small",
    className: "d-block",
    prefix: "From "
  }), React.createElement(Row, {
    tag: "small"
  }, React.createElement(PrimarySectionNameLink, {
    content: content,
    className: "mr-2"
  }), React.createElement(PublishedDate, {
    content: content
  })));
};

ListGroupItemStyleA.displayName = 'Content/ListGroupItem/StyleA';
ListGroupItemStyleA.propTypes = propTypes;
ListGroupItemStyleA.defaultProps = defaultProps;
ListGroupItemStyleA.fragments = {
  content: doc
};

var propTypes$1 = {
  flush: PropTypes.bool,
  itemAttrs: PropTypes.object,
  // eslint-disable-line react/forbid-prop-types
  nodes: PropTypes.arrayOf(PropTypes.object)
};
var defaultProps$1 = {
  flush: false,
  itemAttrs: {},
  nodes: []
};

var ListGroupStyleA = function ListGroupStyleA(_ref) {
  var itemAttrs = _ref.itemAttrs,
      nodes = _ref.nodes,
      attrs = _objectWithoutProperties(_ref, ["itemAttrs", "nodes"]);

  var items = asArray(nodes);
  return items.length ? React.createElement(ListGroup, attrs, items.map(function (content) {
    return React.createElement(ListGroupItemStyleA, _extends({
      key: content.id,
      content: content
    }, itemAttrs));
  })) : null;
};

ListGroupStyleA.displayName = 'Content/ListGroup/StyleA';
ListGroupStyleA.propTypes = propTypes$1;
ListGroupStyleA.defaultProps = defaultProps$1;
ListGroupStyleA.fragments = {
  content: ListGroupItemStyleA.fragments.content
};

export { wrapperAttrs as a, ListGroupStyleA as b, ListGroupItemStyleA as c };
