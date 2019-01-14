'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (_ref) {
	var isValidate = _ref.isValidate,
	    isSubmitted = _ref.isSubmitted,
	    theme = _ref.theme;
	return '\n\t' + (!isValidate && isSubmitted && '\n\t\tborder-color: ' + theme.color.danger + ';\n\t' || '') + '\n';
};