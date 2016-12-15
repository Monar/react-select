import { bemNamesFactory as bmFactory } from 'bem-names';


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
	separators: { element: '-' },
	states,
};

export function bemNamesFactory(blockName) {
	return bmFactory(blockName, config);
}

export default bemNamesFactory;
