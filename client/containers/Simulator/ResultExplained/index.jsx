import React from 'react';
import PropTypes from 'prop-types';

import * as S from './style';

function ResultExplained({ customCss }) {
	return (
		<S.ResultExplained as="p" data-testid="simulator-result-explained" customCss={customCss}>
			Testing the text <strong>amount</strong> an the line height
		</S.ResultExplained>
	);
}

ResultExplained.propTypes = {
	customCss: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ styles: PropTypes.string })])
};

ResultExplained.defaultProps = {
	customCss: undefined
};

export default ResultExplained;
