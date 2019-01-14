"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (_ref) {
	var size = _ref.size,
	    theme = _ref.theme;
	return size === "medium" && "\n\theight: 2rem;\n\tline-height: 2rem;\n\tpadding-right: " + theme.gutter.small + ";\n\tpadding-left: " + theme.gutter.small + ";\n\tpadding-top: 0;\n\tpadding-bottom: 0;\n\tfont-size: " + theme.fontSize.medium + ";\n" || '';
};