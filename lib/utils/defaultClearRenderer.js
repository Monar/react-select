'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = clearRenderer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function clearRenderer(_ref) {
	var bemNames = _ref.bemNames;

	return _react2['default'].createElement('span', {
		className: bemNames('clear'),
		dangerouslySetInnerHTML: { __html: '&times;' }
	});
}

;
module.exports = exports['default'];