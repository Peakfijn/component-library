'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ThumbnailWrapper = exports.CarouselImage = exports.CarouselInnerWrapper = exports.CarouselImageWrapper = exports.CarouselImages = exports.CarouselContent = exports.CarouselWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tposition: relative;\n\twidth: 100%;\n'], ['\n\tposition: relative;\n\twidth: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tposition: relative;\n\tz-index: 1;\n\tmin-height: 100%;\n\n\t', '\n\n\t/* Modifiers: set max-width at breakpoint */\n\t', '\n'], ['\n\tposition: relative;\n\tz-index: 1;\n\tmin-height: 100%;\n\n\t', '\n\n\t/* Modifiers: set max-width at breakpoint */\n\t', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tposition: absolute;\n\toverflow: hidden;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tz-index: 0;\n'], ['\n\tposition: absolute;\n\toverflow: hidden;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tz-index: 0;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tdisplay: flex;\n\n\t', ';\n'], ['\n\tdisplay: flex;\n\n\t', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\tposition: relative;\n'], ['\n\tposition: relative;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n\tbackground-size: cover;\n\tbackground-position: center;\n\tflex-shrink: 0;\n\tflex-grow: 0;\n\theight: 100%;\n\n\t', ';\n'], ['\n\tbackground-size: cover;\n\tbackground-position: center;\n\tflex-shrink: 0;\n\tflex-grow: 0;\n\theight: 100%;\n\n\t', ';\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n\ttext-align: right;\n'], ['\n\ttext-align: right;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _layout = require('../layout');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CarouselWrapper = exports.CarouselWrapper = _styledComponents2.default.div(_templateObject);

var CarouselContent = exports.CarouselContent = _styledComponents2.default.div(_templateObject2, function (_ref) {
	var maxWidth = _ref.maxWidth;
	return maxWidth && '\n\t\tmax-width: ' + maxWidth + ';\n\t' || '';
}, function (_ref2) {
	var maxWidthBreakpoint = _ref2.maxWidthBreakpoint,
	    breakpoint = _ref2.theme.breakpoint;
	return Object.keys(breakpoint).map(function (key) {
		return '\n\t\t\t' + (maxWidthBreakpoint === key && '\n\t\t\t\twidth: 100%;\n\t\t\t\tmax-width: ' + breakpoint[key] + ';\n\t\t\t' || '') + '\n\t\t' || '';
	}) || '';
});

var CarouselImages = exports.CarouselImages = _styledComponents2.default.div(_templateObject3);

var CarouselImageWrapper = exports.CarouselImageWrapper = _styledComponents2.default.div(_templateObject4, function (_ref3) {
	var animating = _ref3.animating;
	return animating && '\n\t\ttransition: transform 1s;\n\t';
});

var CarouselInnerWrapper = exports.CarouselInnerWrapper = _styledComponents2.default.div(_templateObject5);

var CarouselImage = exports.CarouselImage = _styledComponents2.default.img(_templateObject6, function (_ref4) {
	var showThumbnails = _ref4.showThumbnails,
	    active = _ref4.active,
	    theme = _ref4.theme;
	return showThumbnails ? '\n\t\theight: auto;\n\t\theight: -webkit-fill-available;\n\t\tmax-width: 100%;\n\t\tposition: relative;\n\t\tmax-height: 100%;\n\t\t' + (active && '\n\t\t\toutline: 1px solid ' + theme.color.border.dark + ';\n\t\t' || '') + '\n\t' : '\n\t\tdisplay: block;\n\t';
});

var ThumbnailWrapper = exports.ThumbnailWrapper = (0, _styledComponents2.default)(_layout.Wrapper)(_templateObject7);

ThumbnailWrapper.defaultProps = _defaultProps2.default;
CarouselWrapper.defaultProps = _defaultProps2.default;
CarouselContent.defaultProps = _defaultProps2.default;
CarouselImages.defaultProps = _defaultProps2.default;
CarouselImageWrapper.defaultProps = _defaultProps2.default;
CarouselImage.defaultProps = _defaultProps2.default;