"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(["\n\theight: ", ";\n"], ["\n\theight: ", ";\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _wrapper = require("../layout/wrapper");

var _wrapper2 = _interopRequireDefault(_wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoadingContainer = (0, _styledComponents2.default)(_wrapper2.default)(_templateObject, function (_ref) {
	var height = _ref.height;
	return height;
});

exports.default = LoadingContainer;