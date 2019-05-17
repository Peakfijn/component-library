'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var boldModifier = function boldModifier(_ref) {
	var isBold = _ref.isBold;
	return isBold && '\n\tfont-weight: bold;\n' || '';
};

exports.default = boldModifier;