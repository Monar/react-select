import * as bemNames from 'bem-names';


const states = {
	disabled: 'is-disabled',
	isFocused: 'is-focused',
	isLoading: 'is-loading',
	isSelected: 'is-selected',
	isOpen: 'is-open',
	isPseudoFocused: 'is-pseudo-focused',
	searchable: 'is-searchable',
	hasValues: 'has-value',
};

const config = {
	stringModifiers: StringModifiers.PASS_THROUGH,
	separators: { element: '-' },
	states,
};

export function bemNamesFactory(blockName) {
	return bemNames.bemNamesFactory(blockName, config);
}

export {
	bemNamesFactory,
	bemNames: (...args) => customBemNames(config, ...args),
}
