import styled from '@emotion/styled';

import * as S from '../shared/style.shared';

export const Result = styled(S.ContentHolder)`
	background: #fff;

	display: flex;
	align-items: center;

	${({ customCss, theme }) => (typeof customCss === 'function' ? customCss(theme) : customCss)}
`;

export const Title = styled.div`
	${({ theme }) => theme.mixins.subtitle}
	text-align: left;
	flex: 1;
`;
export const ResultValue = styled.div`
	${({ theme }) => theme.mixins.headingMedium}
	text-align: right;
	flex: 1;
`;
