'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var required = function required(value) {
	return value || typeof value === 'number' ? undefined : 'This field is required';
};

exports.default = required;