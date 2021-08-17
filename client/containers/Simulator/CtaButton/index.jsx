import React from 'react';
import { Link } from 'react-router-dom';

import { string, childrenType } from '~/types';

import { Button } from '~/components';

const CtaButton = ({ children, to, styleType }) => {
	return (
		<Button as={Link} to={to} styleType={styleType}>
			{children}
		</Button>
	);
};

CtaButton.propTypes = {
	children: childrenType.isRequired,
	to: string.isRequired,
	styleType: string.isRequired
};
export default CtaButton;
