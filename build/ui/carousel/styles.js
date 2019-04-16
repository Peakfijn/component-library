'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CarouselImage = exports.CarouselImageWrapper = exports.CarouselImages = exports.CarouselContent = exports.CarouselTotal = exports.CarouselWrapper = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CarouselWrapper = exports.CarouselWrapper = _styledComponents2.default.div.withConfig({
	displayName: 'styles__CarouselWrapper',
	componentId: 'jirywc-0'
})(['position:relative;width:100%;']);

var CarouselTotal = exports.CarouselTotal = _styledComponents2.default.div.withConfig({
	displayName: 'styles__CarouselTotal',
	componentId: 'jirywc-1'
})(['position:absolute;top:0;bottom:0;right:0;left:0;z-index:99;width:100%;']);

var CarouselContent = exports.CarouselContent = _styledComponents2.default.div.withConfig({
	displayName: 'styles__CarouselContent',
	componentId: 'jirywc-2'
})(['position:relative;z-index:1;min-height:100%;', ' ', ''], function (_ref) {
	var maxWidth = _ref.maxWidth;
	return maxWidth && '\n\t\tmax-width: ' + maxWidth + ';\n\t' || '';
}, function (_ref2) {
	var maxWidthBreakpoint = _ref2.maxWidthBreakpoint,
	    breakpoint = _ref2.theme.breakpoint;
	return Object.keys(breakpoint).map(function (key) {
		return '\n\t\t\t' + (maxWidthBreakpoint === key && '\n\t\t\t\twidth: 100%;\n\t\t\t\tmax-width: ' + breakpoint[key] + ';\n\t\t\t' || '') + '\n\t\t' || '';
	}) || '';
});

var CarouselImages = exports.CarouselImages = _styledComponents2.default.div.withConfig({
	displayName: 'styles__CarouselImages',
	componentId: 'jirywc-3'
})(['position:absolute;overflow:hidden;top:0;bottom:0;left:0;right:0;z-index:0;']);

var CarouselImageWrapper = exports.CarouselImageWrapper = _styledComponents2.default.div.withConfig({
	displayName: 'styles__CarouselImageWrapper',
	componentId: 'jirywc-4'
})(['height:100%;display:flex;', ';'], function (_ref3) {
	var animating = _ref3.animating;
	return animating && '\n\t\ttransition: transform 1s;\n\t';
});

var CarouselImage = exports.CarouselImage = _styledComponents2.default.img.withConfig({
	displayName: 'styles__CarouselImage',
	componentId: 'jirywc-5'
})(['background-size:cover;background-position:center;flex-shrink:0;flex-grow:0;', ';'], function (_ref4) {
	var hidden = _ref4.hidden;
	return hidden && '\n\t\tdisplay: block;\n\t\theight: 1px;\n\t\twidth: 1px;\n\t';
});

CarouselWrapper.defaultProps = _defaultProps2.default;
CarouselContent.defaultProps = _defaultProps2.default;
CarouselImages.defaultProps = _defaultProps2.default;
CarouselImageWrapper.defaultProps = _defaultProps2.default;
CarouselImage.defaultProps = _defaultProps2.default;