'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (_ref) {
	var theme = _ref.theme,
	    focussed = _ref.focussed,
	    disabled = _ref.disabled;
	return '\n\t' + (focussed ? '\n\t\tborder-color: ' + theme.color.brand + ';\n\t' : '') + '\n\t&:focus {\n\t\tborder-color: ' + theme.color.brand + ';\n\t}\n\n\t&:disabled {\n\t\tbackground: ' + theme.color.background.disabled + '\n\t}\n\n\t' + (disabled === true && '\n\t\t\tbackground: ' + theme.color.background.disabled + '\n\t' || '') + '\n';
};