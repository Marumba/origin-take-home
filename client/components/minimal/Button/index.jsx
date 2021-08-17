import React from 'react';
import { childrenType, customCssType, func, string, oneOfType, elementType } from '~/types';

import * as S from './style';

function Button({ as, customCss, children, onClick, type, styleType, ...buttonProps }) {
	return (
		<S.Button
			as={as}
			type={type}
			onClick={onClick}
			customCss={customCss}
			styleType={styleType}
			{...buttonProps}
		>
			{children}
		</S.Button>
	);
}

Button.propTypes = {
	as: oneOfType([string, elementType]),
	children: childrenType,
	customCss: customCssType,
	onClick: func,
	styleType: string,
	type: string
};

Button.defaultProps = {
	as: 'button',
	children: undefined,
	customCss: undefined,
	onClick: undefined,
	styleType: undefined,
	type: 'button'
};

export default Button;
