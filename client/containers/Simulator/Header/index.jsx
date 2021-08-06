import React from 'react';
import PropTypes from 'prop-types';

import * as S from './style';

function Header({ title, subtitle, SvgComponent }) {
	return (
		<S.Header data-testid="simulator-header">
			{SvgComponent && <SvgComponent role="img" />}
			<S.TextWrapper>
				<S.Title>{title}</S.Title>
				<S.Subtitle>{subtitle}</S.Subtitle>
			</S.TextWrapper>
		</S.Header>
	);
}

Header.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	SvgComponent: PropTypes.oneOfType([PropTypes.shape({ type: PropTypes.func }), PropTypes.elementType])
};

Header.defaultProps = {
	title: '',
	subtitle: '',
	SvgComponent: undefined
};

export default Header;
