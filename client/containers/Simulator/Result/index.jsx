import React from 'react';
import { useRecoilValue } from 'recoil';
import { string, customCssType } from '~/types';

import { formatCurrency } from '~/helpers/utils';
import { CURRENCY_CONFIG } from '~/helpers/constants';

import { amountState } from '../Amount';
import { reachDateState } from '../ReachDate';

import * as S from './style';

function Result({ title, customCss }) {
	const amount = useRecoilValue(amountState);
	const reachData = useRecoilValue(reachDateState);

	const monthlyAmount = amount.value / reachData.months || 0;
	const monthlyAmountFormatted = formatCurrency(
		monthlyAmount,
		CURRENCY_CONFIG.USD.locale,
		CURRENCY_CONFIG.USD.options
	);
	const withoutDoubleZero = monthlyAmountFormatted && monthlyAmountFormatted.replace('.00', '');

	return (
		<S.Result data-testid="simulator-result" customCss={customCss}>
			{title && <S.Title>{title}</S.Title>}
			<S.ResultValue className="highEmphasis">{withoutDoubleZero}</S.ResultValue>
		</S.Result>
	);
}

Result.propTypes = {
	customCss: customCssType,
	title: string
};

Result.defaultProps = {
	customCss: undefined,
	title: undefined
};

export default Result;
