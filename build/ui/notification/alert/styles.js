'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AlertContainer = exports.AlertDialog = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\twidth: ', ';\n\tmargin: ', ';\n\tz-index: ', ';\n\tpointer-events: auto;\n'], ['\n\twidth: ', ';\n\tmargin: ', ';\n\tz-index: ', ';\n\tpointer-events: auto;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n\tdisplay: flex;\n\t', '\n\t', '\n\tmargin:\n\t\t', '\n\t\t', ' * 2\n\t\t', ' * 2\n\t\t', ';\n\tpointer-events: none;\n'], ['\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n\tdisplay: flex;\n\t', '\n\t', '\n\tmargin:\n\t\t', '\n\t\t', ' * 2\n\t\t', ' * 2\n\t\t', ';\n\tpointer-events: none;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _bar = require('../bar');

var _bar2 = _interopRequireDefault(_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AlertDialog = exports.AlertDialog = (0, _styledComponents2.default)(_bar2.default)(_templateObject, function (props) {
	return props.stretch ? '100%' : 'auto';
}, function (props) {
	return props.theme.gutter.small;
}, function (props) {
	return props.theme.zIndexGroups.notifications;
});

var AlertContainer = exports.AlertContainer = _styledComponents2.default.div(_templateObject2, function (_ref) {
	var vertical = _ref.vertical;
	return vertical && 'align-items: ' + vertical || '';
}, function (_ref2) {
	var horizontal = _ref2.horizontal;
	return horizontal && 'justify-content: ' + horizontal || '';
}, function (props) {
	return props.theme.gutter.small;
}, function (props) {
	return props.theme.gutter.small;
}, function (props) {
	return props.theme.gutter.small;
}, function (props) {
	return props.theme.gutter.small;
});