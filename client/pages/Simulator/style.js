import styled from '@emotion/styled';

export const MainContainer = styled.div`
	${({ theme }) => theme.mixins.pageContainer};
`;

export const MainTitle = styled.h1`
	${({ theme }) => theme.mixins.subtitle}

	margin: 32px 0 24px;

	@media ${({ theme }) => theme.medias.desktop} {
		margin-top: 48px;
	}
`;

export const SimulatorInputHolder = styled.div`
	margin: 24px 0;

	& > div + div {
		margin-top: 16px;
	}

	@media ${({ theme }) => theme.medias.desktop} {
		display: flex;

		& > div {
			& + div {
				margin-top: 0;
				min-width: 192px;
			}

			&:first-of-type {
				flex: 1;
				margin-right: 16px;
			}
		}
	}
`;

export const SimulatorResultHolder = styled.div`
	${({ theme }) => theme.mixins.box.big}

	margin-bottom: 32px;

	& > * {
		border-radius: 8px;

		&:last-child {
			border-radius: 0 0 8px 8px;
			min-height: 80px;

			display: flex;
			align-items: center;
		}
	}
`;
