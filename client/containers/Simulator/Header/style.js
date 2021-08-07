import styled from '@emotion/styled';

export const Header = styled.div`
	display: flex;
	align-items: center;
	justtify-content: left;

	svg {
		margin-right: 15px;
	}

	${({ customCss, theme }) => (typeof customCss === 'function' ? customCss(theme) : customCss)}
`;

export const TextWrapper = styled.div`
	display: flex;
	align-items: left;
	justify-content: center;
	flex-direction: column;
`;
export const Title = styled.h2`
	${({ theme }) => theme.mixins.headingSmall};

	display: block;
`;
export const Subtitle = styled.h3`
	display: block;
`;
