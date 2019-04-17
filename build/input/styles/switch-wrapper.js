'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tdisplay: flex;\n\talign-items: center;\n\tline-height: 2rem;\n'], ['\n\tdisplay: flex;\n\talign-items: center;\n\tline-height: 2rem;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SwitchWrapper = _styledComponents2.default.div(_templateObject);

SwitchWrapper.defaultProps = _defaultProps2.default;

exports.default = SwitchWrapper;