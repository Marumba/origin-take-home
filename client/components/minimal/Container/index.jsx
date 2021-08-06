import React from 'react';
import PropTypes from 'prop-types';

import * as S from './style';

function Container({ children, as }) {
	return <S.Container as={as}>{children}</S.Container>;
}

Container.propTypes = {
	as: PropTypes.string,
	children: PropTypes.node.isRequired
};

Container.defaultProps = {
	as: ''
};

export default Container;
