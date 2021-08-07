import React from 'react';
import PropTypes from 'prop-types';

import InputCurrency from '~/components/forms/Input/Currency';

import * as S from './style';

function Amount({ customCss, ...inputProps }) {
	return (
		<S.Amount data-testid="simulator-amount" customCss={customCss}>
			<InputCurrency {...inputProps} id="amount" name="amount" currency="USD" />;
		</S.Amount>
	);
}

Amount.propTypes = {
	customCss: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ styles: PropTypes.string })]),
	label: PropTypes.string
};

Amount.defaultProps = {
	customCss: undefined,
	label: ''
};

export default Amount;
