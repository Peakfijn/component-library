'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

exports.default = function (_ref) {
		var borderRadiusModifier = _ref.borderRadius,
		    borderRadius = _ref.theme.borderRadius;
		return borderRadiusModifier && '\n\t\tborder-radius: ' + borderRadius['' + borderRadiusModifier] + ';\n' || '';
};