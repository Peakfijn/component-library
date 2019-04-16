'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Slider = exports.StyledProgress = exports.StyledBar = exports.StyledHeader = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\ttext-transform: none;\n\ttext-decoration: none;\n\tfont-family: inherit;\n\tfont-size: ', ';\n\tdisplay: inline-flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\twidth: 100%;\n\tmargin-bottom: ', ';\n'], ['\n\ttext-transform: none;\n\ttext-decoration: none;\n\tfont-family: inherit;\n\tfont-size: ', ';\n\tdisplay: inline-flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\twidth: 100%;\n\tmargin-bottom: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tborder-radius: ', ';\n\tbackground-color: ', ';\n\theight: 8px;\n\twidth: 100%;\n\tposition: relative;\n'], ['\n\tborder-radius: ', ';\n\tbackground-color: ', ';\n\theight: 8px;\n\twidth: 100%;\n\tposition: relative;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tborder-radius: ', ';\n\tbackground-color: ', ';\n\theight: 8px;\n\twidth: ', ';\n'], ['\n\tborder-radius: ', ';\n\tbackground-color: ', ';\n\theight: 8px;\n\twidth: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tcursor: pointer;\n\tmargin: 0;\n\tbackground-color: ', ';\n\tborder: 1px solid ', ';\n\tborder-radius: 16px;\n\twidth: 16px;\n\theight: 16px;\n\tposition: absolute;\n\tleft: calc(', ' - 10px);\n\ttop: -5px;\n'], ['\n\tcursor: pointer;\n\tmargin: 0;\n\tbackground-color: ', ';\n\tborder: 1px solid ', ';\n\tborder-radius: 16px;\n\twidth: 16px;\n\theight: 16px;\n\tposition: absolute;\n\tleft: calc(', ' - 10px);\n\ttop: -5px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledHeader = exports.StyledHeader = _styledComponents2.default.div(_templateObject, function (props) {
	return props.theme.fontSize.medium;
}, function (props) {
	return props.theme.gutter.small;
});

var StyledBar = exports.StyledBar = _styledComponents2.default.div(_templateObject2, function (props) {
	return props.theme.borderRadius.medium;
}, function (props) {
	return props.theme.color.background.progressBar;
});

var StyledProgress = exports.StyledProgress = _styledComponents2.default.div(_templateObject3, function (props) {
	return props.theme.borderRadius.medium;
}, function (props) {
	return props.color;
}, function (props) {
	return props.progress;
});

var Slider = exports.Slider = _styledComponents2.default.div(_templateObject4, function (props) {
	return props.theme.color.background.input;
}, function (props) {
	return props.theme.color.grey;
}, function (props) {
	return props.progress;
});

StyledHeader.defaultProps = _defaultProps2.default;
StyledBar.defaultProps = _defaultProps2.default;
StyledProgress.defaultProps = _defaultProps2.default;
Slider.defaultProps = _defaultProps2.default;