import React from 'react';
import { childrenType, string } from '~/types';

import * as S from './style';

function Container({ children, as }) {
	return <S.Container as={as}>{children}</S.Container>;
}

Container.propTypes = {
	as: string,
	children: childrenType.isRequired
};

Container.defaultProps = {
	as: ''
};

export default Container;
