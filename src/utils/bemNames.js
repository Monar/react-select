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

const separators = {
	element: '-',
	modifier: '--'
}

export function bemNamesFactory(blockName) {
	return bemNames.bemNamesFactory(blockName, states, separators);
}

export default bemNamesFactory;
