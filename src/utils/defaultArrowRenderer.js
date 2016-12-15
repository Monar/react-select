import React from 'react';

export default function arrowRenderer ({ onMouseDown, bemNames }) {
	return (
		<span
			className={bemNames('arrow')}
			onMouseDown={onMouseDown}
		/>
	);
};
