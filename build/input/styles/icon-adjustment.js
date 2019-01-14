'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (_ref) {
	var size = _ref.size,
	    theme = _ref.theme,
	    icon = _ref.icon,
	    iconPosition = _ref.iconPosition;
	return '\n\t' + (size === "medium" && '\n\t\t' + (icon && iconPosition === 'right' && '\n\t\t\tpadding-right: calc((' + theme.gutter.medium + ') * 2);\n\t\t' || '') + '\n\t\t' + (icon && iconPosition === 'left' && '\n\t\t\tpadding-left: calc((' + theme.gutter.medium + ') * 2);\n\t\t' || '') + '\n\t' || '') + '\n';
};