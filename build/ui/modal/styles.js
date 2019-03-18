'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ModalButton = exports.ModalFooter = exports.TitleContainer = exports.ModalContent = exports.ModalContentContainer = exports.ModalContainer = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalContainer = exports.ModalContainer = _styledComponents2.default.div.withConfig({
	displayName: 'styles__ModalContainer',
	componentId: 'qsm57g-0'
})(['position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;background-color:', ';width:100%;height:100%;'], function (props) {
	return props.theme.color.modalBackground;
});

var ModalContentContainer = exports.ModalContentContainer = _styledComponents2.default.div.withConfig({
	displayName: 'styles__ModalContentContainer',
	componentId: 'qsm57g-1'
})(['display:flex;align-items:center;justify-content:center;height:100%;']);

var ModalContent = exports.ModalContent = _styledComponents2.default.div.withConfig({
	displayName: 'styles__ModalContent',
	componentId: 'qsm57g-2'
})(['border-radius:', ';background:', ';width:100%;', ''], function (props) {
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

var TitleContainer = exports.TitleContainer = _styledComponents2.default.div.withConfig({
	displayName: 'styles__TitleContainer',
	componentId: 'qsm57g-3'
})(['display:flex;justify-content:space-between;border-bottom:1px solid ', ';padding:', ';line-height:2rem;'], function (props) {
	return props.theme.color.border.light;
}, function (props) {
	return props.theme.gutter.medium;
});

var ModalFooter = exports.ModalFooter = _styledComponents2.default.div.withConfig({
	displayName: 'styles__ModalFooter',
	componentId: 'qsm57g-4'
})(['display:flex;justify-content:flex-end;border-top:1px solid ', ';padding:', ';'], function (props) {
	return props.theme.color.border.light;
}, function (props) {
	return props.theme.gutter.small;
});

var ModalButton = exports.ModalButton = (0, _styledComponents2.default)(_button2.default).withConfig({
	displayName: 'styles__ModalButton',
	componentId: 'qsm57g-5'
})(['margin:', ';'], function (props) {
	return props.theme.gutter.small;
});

ModalContainer.defaultProps = _defaultProps2.default;
ModalContentContainer.defaultProps = _defaultProps2.default;
ModalContent.defaultProps = _defaultProps2.default;
TitleContainer.defaultProps = _defaultProps2.default;
ModalFooter.defaultProps = _defaultProps2.default;
ModalButton.defaultProps = _defaultProps2.default;