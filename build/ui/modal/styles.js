'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ModalButton = exports.ModalFooter = exports.TitleContainer = exports.ModalContent = exports.ModalContentContainer = exports.ModalContainer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tz-index: 1000;\n\tbackground-color: ', ';\n\twidth: 100%;\n\theight: 100%;\n'], ['\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tz-index: 1000;\n\tbackground-color: ', ';\n\twidth: 100%;\n\theight: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\theight: 100%;\n'], ['\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\theight: 100%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tborder-radius: ', ';\n\tbackground: ', ';\n\twidth: 100%;\n\t', '\n'], ['\n\tborder-radius: ', ';\n\tbackground: ', ';\n\twidth: 100%;\n\t', '\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tborder-bottom: 1px solid ', ';\n\tpadding: ', ';\n\tline-height: 2rem;\n'], ['\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tborder-bottom: 1px solid ', ';\n\tpadding: ', ';\n\tline-height: 2rem;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tborder-top: 1px solid ', ';\n\tpadding: ', ';\n'], ['\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tborder-top: 1px solid ', ';\n\tpadding: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n\tmargin: ', ';\n'], ['\n\tmargin: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ModalContainer = exports.ModalContainer = _styledComponents2.default.div(_templateObject, function (props) {
	return props.theme.color.modalBackground;
});

var ModalContentContainer = exports.ModalContentContainer = _styledComponents2.default.div(_templateObject2);

var ModalContent = exports.ModalContent = _styledComponents2.default.div(_templateObject3, function (props) {
	return props.theme.borderRadius.medium;
}, function (props) {
	return props.theme.color.background.input;
}, function (_ref) {
	var maxWidthBreakpoint = _ref.maxWidthBreakpoint,
	    breakpoint = _ref.theme.breakpoint;
	return Object.keys(breakpoint).map(function (key) {
		return '\n\t\t\t' + (maxWidthBreakpoint === key && '\n\t\t\tmax-width: ' + breakpoint[key] + ';\n\t\t\t' || '') + '\n\t\t' || '';
	}) || '';
});

var TitleContainer = exports.TitleContainer = _styledComponents2.default.div(_templateObject4, function (props) {
	return props.theme.color.border.light;
}, function (props) {
	return props.theme.gutter.medium;
});

var ModalFooter = exports.ModalFooter = _styledComponents2.default.div(_templateObject5, function (props) {
	return props.theme.color.border.light;
}, function (props) {
	return props.theme.gutter.small;
});

var ModalButton = exports.ModalButton = (0, _styledComponents2.default)(_button2.default)(_templateObject6, function (props) {
	return props.theme.gutter.small;
});

ModalContainer.defaultProps = _defaultProps2.default;
ModalContentContainer.defaultProps = _defaultProps2.default;
ModalContent.defaultProps = _defaultProps2.default;
TitleContainer.defaultProps = _defaultProps2.default;
ModalFooter.defaultProps = _defaultProps2.default;
ModalButton.defaultProps = _defaultProps2.default;