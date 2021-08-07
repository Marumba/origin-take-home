import styled from '@emotion/styled';

export const InputDefault = styled.div`
	display: flex;
	flex-direction: column;

	${({ customCss, theme }) => (typeof customCss === 'function' ? customCss(theme) : customCss)}
`;
export const Label = styled.label`
	${({ theme }) => theme.mixins.description}

	color: ${({ theme }) => theme.colors.blueGray900}
`;
export const Wrapper = styled.div`
	${({ theme }) => theme.mixins.smallBox}
	background: #fff;

	display: flex;
	align-items: center;

	svg {
		padding-left: 13px;
	}
`;
export const Input = styled.input`
	${({ theme }) => theme.mixins.headingSmall}

	color: ${({ theme }) => theme.colors.blueGray600};

	padding: 14px 7px;

	width: 100%;
`;
