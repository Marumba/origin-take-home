import styled from '@emotion/styled';

import * as S from '../shared/style.shared';

export const ResultExplained = styled(S.ContentHolder)`
	${({ theme }) => theme.mixins.caption}

	background: ${({ theme }) => theme.colors.blueGray10};

	${({ customCss, theme }) => (typeof customCss === 'function' ? customCss(theme) : customCss)}
`;
