import styled from '@emotion/styled';

export const Wrapper = styled.div`
	${({ theme }) => theme.mixins.box.small}
	background: #fff;

	display: flex;
	align-items: center;
	min-height: 56px;
`;

export const Label = styled.label`
	${({ theme }) => theme.mixins.description}
	margin-bottom: 4px;

	color: ${({ theme }) => theme.colors.blueGray900};
`;
