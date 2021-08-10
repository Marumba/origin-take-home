import React from 'react';

import { useRecoilValue } from 'recoil';
import { childrenType, customCssType, string } from '~/types';

import { amountState } from '../Amount';
import { reachDateState } from '../ReachDate';

import * as S from './style';

function ResultExplained({ as, customCss, children }) {
	const amount = useRecoilValue(amountState);
	const reachData = useRecoilValue(reachDateState);

	return (
		<S.ResultExplained
			className="highEmphasis"
			as={as}
			data-testid="simulator-result-explained"
			customCss={customCss}
		>
			{children && typeof children === 'function'
				? children({ amount: amount.maskedValue, date: reachData.date, months: reachData.months })
				: children}
		</S.ResultExplained>
	);
}

ResultExplained.propTypes = {
	as: string,
	children: childrenType.isRequired,
	customCss: customCssType
};

ResultExplained.defaultProps = {
	as: 'div',
	customCss: undefined
};

export default ResultExplained;
