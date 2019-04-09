'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (_ref) {
	var error = _ref.error,
	    theme = _ref.theme;
	return '\n\t' + (error && '\n\t\tborder-color: ' + theme.color.danger + ';\n\t' || '') + '\n';
};