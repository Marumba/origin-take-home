import React from 'react';
import { childrenType, customCssType, string } from '~/types';

import * as S from './style';

function Container({ as, children, customCss }) {
	return (
		<S.Container as={as} customCss={customCss}>
			{children}
		</S.Container>
	);
}

Container.propTypes = {
	as: string,
	children: childrenType.isRequired,
	customCss: customCssType
};

Container.defaultProps = {
	as: '',
	customCss: undefined
};

export default Container;
