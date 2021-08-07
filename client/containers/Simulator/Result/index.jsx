import React from 'react';
import PropTypes from 'prop-types';

import * as S from './style';

function Result({ title, customCss }) {
	return (
		<S.Result data-testid="simulator-result" customCss={customCss}>
			{title && <S.Title>{title}</S.Title>}
			<S.ResultValue className="highEmphasis">123213</S.ResultValue>
		</S.Result>
	);
}

Result.propTypes = {
	customCss: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ styles: PropTypes.string })]),
	title: PropTypes.string
};

Result.defaultProps = {
	customCss: undefined,
	title: undefined
};

export default Result;
