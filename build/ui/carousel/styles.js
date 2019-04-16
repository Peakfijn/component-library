'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LinkAnchor = exports.InvertedP = exports.InvertedH3 = exports.InvertedSpan = exports.CarouselText = exports.CarouselImage = exports.CarouselImageWrapper = exports.CarouselImages = exports.CarouselContent = exports.CarouselRight = exports.CarouselLeft = exports.CarouselControl = exports.CarouselTotal = exports.CarouselWrapper = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _spacing = require('../layout/spacing');

var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UNoMargin = (0, _styledComponents.css)(['margin:0 !important;']);

var tInverted = (0, _styledComponents.css)(['color:', ';'], function (props) {
	return props.theme.color.text.inverted;
});

var Button = (0, _styledComponents.css)(['flex-direction:row;justify-content:center;text-transform:uppercase;border:none;font-style:normal;letter-spacing:normal;line-height:2.5rem;min-height:2.5rem;text-decoration:none;padding:0 2rem;font-weight:500;font-stretch:normal;cursor:pointer;outline:none;display:inline-block;white-space:nowrap;&:hover,&:focus{opacity:0.85;}&:active{opacity:1;text-decoration:none;}@media (\'<=small\'){padding:0 0.75rem;}']);

var CarouselWrapper = exports.CarouselWrapper = _styledComponents2.default.div.withConfig({
	displayName: 'styles__CarouselWrapper',
	componentId: 'jirywc-0'
})(['position:relative;width:100%;']);

var CarouselTotal = exports.CarouselTotal = _styledComponents2.default.div.withConfig({
	displayName: 'styles__CarouselTotal',
	componentId: 'jirywc-1'
})(['position:absolute;top:0;bottom:0;right:0;left:0;z-index:99;width:100%;']);

var CarouselControl = exports.CarouselControl = _styledComponents2.default.span.withConfig({
	displayName: 'styles__CarouselControl',
	componentId: 'jirywc-2'
})(['position:absolute;right:0;top:100%;transform:translateY(-100%) translateX(0%);&:active{text-decoration:none;}']);

var buttonTertiary = (0, _styledComponents.css)(['', ' ', ''], UNoMargin, tInverted);

var CarouselLeft = exports.CarouselLeft = _styledComponents2.default.button.withConfig({
	displayName: 'styles__CarouselLeft',
	componentId: 'jirywc-3'
})(['left:0;font-size:45px;line-height:30px;text-align:center;padding:12px 16px;', ';'], buttonTertiary);

var CarouselRight = exports.CarouselRight = _styledComponents2.default.button.withConfig({
	displayName: 'styles__CarouselRight',
	componentId: 'jirywc-4'
})(['right:0;font-size:45px;line-height:30px;text-align:center;padding:12px 16px;', ';'], buttonTertiary);

var CarouselContent = exports.CarouselContent = _styledComponents2.default.div.withConfig({
	displayName: 'styles__CarouselContent',
	componentId: 'jirywc-5'
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
	componentId: 'jirywc-6'
})(['position:absolute;overflow:hidden;top:0;bottom:0;left:0;right:0;z-index:0;']);

var CarouselImageWrapper = exports.CarouselImageWrapper = _styledComponents2.default.div.withConfig({
	displayName: 'styles__CarouselImageWrapper',
	componentId: 'jirywc-7'
})(['height:100%;display:flex;', ';'], function (_ref3) {
	var animating = _ref3.animating;
	return animating && '\n\t\ttransition: transform 1s;\n\t';
});

var CarouselImage = exports.CarouselImage = _styledComponents2.default.img.withConfig({
	displayName: 'styles__CarouselImage',
	componentId: 'jirywc-8'
})(['background-size:cover;flex-shrink:0;flex-grow:0;', ';'], function (_ref4) {
	var hidden = _ref4.hidden;
	return hidden && '\n\t\tdisplay: block;\n\t\theight: 1px;\n\t\twidth: 1px;\n\t';
});

var CarouselText = exports.CarouselText = (0, _styledComponents2.default)(_spacing2.default).withConfig({
	displayName: 'styles__CarouselText',
	componentId: 'jirywc-9'
})(['transform:translateX(-85%) translateY(10%);h3{white-space:initial;word-break:normal;}']);

var InvertedSpan = exports.InvertedSpan = _styledComponents2.default.span.withConfig({
	displayName: 'styles__InvertedSpan',
	componentId: 'jirywc-10'
})(['', ' text-transform:uppercase;margin-top:1.66rem;margin-bottom:1.66rem;word-break:break-all;word-break:break-word;word-break:normal;font-size:', ';line-height:', ';'], tInverted, function (props) {
	return props.theme.fontSize.huge;
}, function (props) {
	return props.theme.fontSize.huge;
});

var InvertedH3 = exports.InvertedH3 = _styledComponents2.default.h3.withConfig({
	displayName: 'styles__InvertedH3',
	componentId: 'jirywc-11'
})(['', ''], tInverted);

var InvertedP = exports.InvertedP = _styledComponents2.default.p.withConfig({
	displayName: 'styles__InvertedP',
	componentId: 'jirywc-12'
})(['', ''], tInverted);

var LinkAnchor = exports.LinkAnchor = _styledComponents2.default.a.withConfig({
	displayName: 'styles__LinkAnchor',
	componentId: 'jirywc-13'
})(['', ' ', ' ', ' background-color:transparent;color:', ';box-shadow:0 0 0 3px ', ' inset;&:active{box-shadow:0 0 0 3px ', ' inset;background:', ';color:', ';fill:', ';text-decoration:none;}'], tInverted, UNoMargin, Button, function (props) {
	return props.theme.color.text.normal;
}, function (props) {
	return props.theme.color.text.inverted;
}, function (props) {
	return props.theme.color.text.normal;
}, function (props) {
	return props.theme.color.text.normal;
}, function (props) {
	return props.theme.color.text.inverted;
}, function (props) {
	return props.theme.color.text.inverted;
});

UNoMargin.defaultProps = _defaultProps2.default;
tInverted.defaultProps = _defaultProps2.default;
Button.defaultProps = _defaultProps2.default;
CarouselWrapper.defaultProps = _defaultProps2.default;
CarouselTotal.defaultProps = _defaultProps2.default;
CarouselControl.defaultProps = _defaultProps2.default;
buttonTertiary.defaultProps = _defaultProps2.default;
CarouselLeft.defaultProps = _defaultProps2.default;
CarouselRight.defaultProps = _defaultProps2.default;
CarouselContent.defaultProps = _defaultProps2.default;
CarouselImages.defaultProps = _defaultProps2.default;
CarouselImageWrapper.defaultProps = _defaultProps2.default;
CarouselImage.defaultProps = _defaultProps2.default;
CarouselText.defaultProps = _defaultProps2.default;
InvertedSpan.defaultProps = _defaultProps2.default;
InvertedH3.defaultProps = _defaultProps2.default;
InvertedP.defaultProps = _defaultProps2.default;
LinkAnchor.defaultProps = _defaultProps2.default;