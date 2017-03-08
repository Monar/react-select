'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.bemNamesFactory = bemNamesFactory;

var _bemNames = require('bem-names');

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
	return (0, _bemNames.bemNamesFactory)(blockName, config);
}

exports['default'] = bemNamesFactory;