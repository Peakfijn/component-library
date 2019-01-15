'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (_ref) {
	var size = _ref.size,
	    theme = _ref.theme;
	return '\n\t' + (size === 'tiny' && '\n\t\tline-height: 1rem;\n\t\tfont-size: ' + theme.fontSize.tiny + ';\n\t\tpadding: ' + theme.gutter.none + ' ' + theme.gutter.tiny + ';\n\t' || '') + '\n\n\t' + (size === 'small' && '\n\t\tline-height: 1rem;\n\t\tfont-size: ' + theme.fontSize.small + ';\n\t\tpadding: ' + theme.gutter.tiny + ' ' + theme.gutter.small + ';\n\t' || '') + '\n\n\t' + (size === 'medium' && '\n\t\tline-height: 1rem;\n\t\tfont-size: ' + theme.fontSize.small + ';\n\t\tpadding: ' + theme.gutter.small + ' ' + theme.gutter.medium + ';\n\t' || '') + '\n\n\t' + (size === 'large' && '\n\t\tline-height: 1rem;\n\t\tpadding: ' + theme.gutter.medium + ' ' + theme.gutter.large + ';\n\t' || '') + '\n\n\t' + (size === 'huge' && '\n\t\tline-height: 1rem;\n\t\tpadding: ' + theme.gutter.large + ' ' + theme.gutter.huge + ';\n\t' || '') + '\n';
};