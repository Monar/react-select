import React from 'react';

export default function clearRenderer ({ bemNames }) {
	return (
		<span
			className={bemNames('clear')}
			dangerouslySetInnerHTML={{ __html: '&times;' }}
		/>
	);
};
