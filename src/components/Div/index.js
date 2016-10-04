import React, { PropTypes } from 'react';

import './style.less'

const Div = ({
	className,
	content
}) => {
	return (
		<div className={className}>
			{content}
		</div>
	);
};

Div.propTypes = {
	className: PropTypes.string,
	content: PropTypes.string
};

export default Div;