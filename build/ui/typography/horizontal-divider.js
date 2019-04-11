'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HorizontalDivider = function HorizontalDivider(props) {
  var colour = props.colour,
      fontSize = props.fontSize,
      borderSize = props.borderSize;


  return _react2.default.createElement(
    _styles.HorizontalDividerStyled,
    null,
    _react2.default.createElement(_styles.DividerStyled, { colour: colour, fontSize: fontSize, borderSize: borderSize })
  );
};

HorizontalDivider.defaultProps = {
  colour: 'normal',
  fontSize: 'medium',
  borderSize: 1
};

HorizontalDivider.propTypes = {
  colour: _propTypes2.default.string,
  fontSize: _propTypes2.default.string,
  borderSize: _propTypes2.default.number
};

exports.default = HorizontalDivider;