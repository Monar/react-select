'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.bemNamesFactory = bemNamesFactory;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _bemNames = require('bem-names');

var bemNames = _interopRequireWildcard(_bemNames);

var states = {
	disabled: 'is-disabled',
	isFocused: 'is-focused',
	isLoading: 'is-loading',
	isSelected: 'is-selected',
	isOpen: 'is-open',
	isPseudoFocused: 'is-pseudo-focused',
	searchable: 'is-searchable',
	hasValues: 'has-value'
};

var config = {
	separators: { element: '-' },
	states: states
};

function bemNamesFactory(blockName) {
	return bemNames.bemNamesFactory(blockName, config);
}

exports['default'] = bemNamesFactory;