import React from 'react';
import { string, customCssType, oneOfType, element } from '~/types';

import * as S from './style';

function Header({ customCss, icon, subtitle, title }) {
	return (
		<S.Header data-testid="simulator-header" customCss={customCss}>
			{icon}
			<S.TextWrapper>
				<S.Title className="highEmphasis">{title}</S.Title>
				<S.Subtitle className="lowEmphasis">{subtitle}</S.Subtitle>
			</S.TextWrapper>
		</S.Header>
	);
}

Header.propTypes = {
	customCss: customCssType,
	icon: oneOfType([string, element]),
	subtitle: string,
	title: string
};

Header.defaultProps = {
	customCss: undefined,
	icon: undefined,
	subtitle: '',
	title: ''
};

export default Header;
