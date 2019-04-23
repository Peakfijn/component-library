'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.StyledCircle = exports.StyledContainer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tfont-size: ', ';\n\tposition: relative;\n'], ['\n\tfont-size: ', ';\n\tposition: relative;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tposition: absolute;\n\ttransform: translate(-50%, -50%);\n\tz-index: 1;\n\tborder-radius: 50px;\n\n\t', '\n'], ['\n\tposition: absolute;\n\ttransform: translate(-50%, -50%);\n\tz-index: 1;\n\tborder-radius: 50px;\n\n\t', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = require('../../tag/styles');

var _styles2 = _interopRequireDefault(_styles);

var _defaultProps = require('../../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledContainer = exports.StyledContainer = _styledComponents2.default.div(_templateObject, function (props) {
	return props.theme.fontSize.medium;
});

var StyledCircle = exports.StyledCircle = (0, _styledComponents2.default)(_styles2.default)(_templateObject2, function (_ref) {
	var position = _ref.position;
	return position === 'top-right' && '\n\t\ttop: 0;\n\t\tright: 0;\n\t\ttransform: translate(50%, -50%);\n\t' || '';
});

StyledContainer.defaultProps = _defaultProps2.default;
StyledCircle.defaultProps = _defaultProps2.default;