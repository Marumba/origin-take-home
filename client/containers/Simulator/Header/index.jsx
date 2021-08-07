import React from 'react';
import PropTypes from 'prop-types';

import * as S from './style';

function Header({ customCss, subtitle, SvgComponent, title }) {
	return (
		<S.Header data-testid="simulator-header" customCss={customCss}>
			{SvgComponent && <SvgComponent role="img" />}
			<S.TextWrapper>
				<S.Title className="highEmphasis">{title}</S.Title>
				<S.Subtitle className="lowEmphasis">{subtitle}</S.Subtitle>
			</S.TextWrapper>
		</S.Header>
	);
}

Header.propTypes = {
	customCss: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ styles: PropTypes.string })]),
	subtitle: PropTypes.string,
	SvgComponent: PropTypes.oneOfType([PropTypes.shape({ type: PropTypes.func }), PropTypes.elementType]),
	title: PropTypes.string
};

Header.defaultProps = {
	customCss: undefined,
	subtitle: '',
	SvgComponent: undefined,
	title: ''
};

export default Header;
