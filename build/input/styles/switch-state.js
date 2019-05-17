'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _polished = require('polished');

exports.default = function (_ref) {
	var theme = _ref.theme,
		focussed = _ref.focussed,
		selected = _ref.selected,
		disabled = _ref.disabled,
		indeterminate = _ref.indeterminate,
		backgroundColor = _ref.backgroundColor;
	return '\n\t' + (focussed && backgroundColor ? '\n\t\tbackground-color: ' + (0, _polished.lighten)(theme.color.adjustColor.tiny, theme.color.background[backgroundColor]) + ';\n\t' : '') + '\n\n\t/* State: selected or indeterminate */\n\t' + ((selected || indeterminate) && backgroundColor && '\n\t\tbackground-color: ' + theme.color.background[backgroundColor] + ';\n\t\tborder-color: ' + theme.color.brand + ';\n\t' || '') + '\n\n\t' + (focussed && (selected || indeterminate) ? '\n\t\tbackground-color: ' + (0, _polished.darken)(theme.color.adjustColor.tiny, theme.color.brand) + ';\n\t' : '') + '\n\n\t/* State: disabled */\n\t' + (disabled && '\n\t\tbackground-color: ' + theme.color.background.inputDisabled + ';\n\t\tcursor: not-allowed;\n\t' || '') + '\n\n\t/* State: selected & disabled */\n\t' + (selected && disabled && '\n\t\tbackground-color: ' + (0, _polished.lighten)(theme.color.adjustColor.medium, theme.color.brand) + ';\n\t\tborder-color: ' + (0, _polished.lighten)(theme.color.adjustColor.medium, theme.color.brand) + ';\n\t\tcursor: not-allowed;\n\t' || '') + '\n';
};
