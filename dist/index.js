"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./styles.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var NextSimpleWhiteGradientHeader = function NextSimpleWhiteGradientHeader(props) {
  var defaultRotate = '90deg';
  var defaultGradientColor = '#FFFFFF';
  var headerStyle = {
    backgroundImage: 'url(' + props.backgroundImagePath + ')'
  };
  var wrapperStyle = {
    background: 'linear-gradient(' + (props.gradientRotate ? props.gradientRotate : defaultRotate) + ',' + (props.gradientColor ? props.gradientColor : defaultGradientColor) + (props.gradientStartOpacity ? props.gradientStartOpacity : 'FF') + ' 0%,' + (props.gradientColor ? props.gradientColor : defaultGradientColor) + (props.gradientEndOpacity ? props.gradientEndOpacity : '00') + ' 100%)'
  };
  return /*#__PURE__*/_react["default"].createElement("header", {
    style: headerStyle,
    className: "nextSimpleWhiteGradientHeader"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: wrapperStyle,
    className: "nextSimpleWhiteGradientHeaderWraper"
  }, props.children));
};
var _default = NextSimpleWhiteGradientHeader;
exports["default"] = _default;