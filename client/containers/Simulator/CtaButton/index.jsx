import React from 'react';
import { Link } from 'react-router-dom';

import { string } from '~/types';

import { Button } from '~/components';

const CtaButton = ({ to, styleType }) => {
	return <Button as={Link} to={to} styleType={styleType} />;
};

CtaButton.propTypes = {
	to: string.isRequired,
	styleType: string.isRequired
};
export default CtaButton;
