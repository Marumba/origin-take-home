import styled from '@emotion/styled';

import * as S from '../shared/style.shared';

export const InputDefault = styled.div`
	display: flex;
	flex-direction: column;

	${({ customCss, theme }) => (typeof customCss === 'function' ? customCss(theme) : customCss)}
`;
export const Label = styled(S.Label)``;

export const Wrapper = styled(S.Wrapper)`
	position: relative;
	padding: 0 14px;

	& svg + input {
		padding-left: 7px;
	}
`;

export const Input = styled.input`
	${({ theme }) => theme.mixins.headingSmall}

	color: ${({ theme }) => theme.colors.blueGray600};

	padding: 14px 0;

	width: 100%;
`;
