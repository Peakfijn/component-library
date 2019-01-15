'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

exports.default = function (_ref) {
		var fontSizeModifier = _ref.fontSize,
		    fontSize = _ref.theme.fontSize;
		return fontSizeModifier && '\n\t\tfont-size: ' + fontSize['' + fontSizeModifier] + ';\n' || '';
};