import { css } from '@emotion/react';

export default theme => ({
	boxShadow: {
		level4: css`
			box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
			border-radius: 8px;
		`
	},
	button: css`
		font-family: ${theme.typography.families.primary};
		font-weight: ${theme.typography.weights.primary.semibold};
		font-size: 16px;
		line-height: 20px;
		text-align: center;
	`,
	caption: css`
		font-family: ${theme.typography.families.primary};
		font-weight: ${theme.typography.weights.primary.regular};
		font-size: 12px;
		line-height: 16px;

		&.highEmphasis {
			color: ${theme.colors.blueGray900};
		}

		strong {
			font-weight: ${theme.typography.weights.primary.semibold};
		}
	`,
	cta: css`
		background: ${theme.colors.brandColorPrimary};

		border-radius: 32px;

		height: 56px;
		max-width: 320px;
	`,
	smallBox: css`
		border: 1px solid ${theme.colors.blueGray50};
		border-radius: 4px;
	`,
	bigBox: css`
		border: 1px solid ${theme.colors.blueGray50};
		border-radius: 8px;
	`,
	description: css`
		font-family: ${theme.typography.families.primary};
		font-weight: ${theme.typography.weights.primary.regular};
		font-size: 12px;
		line-height: 150%;

		@media ${theme.medias.desktop} {
			font-size: 14px;
		}
	`,
	headingSmall: css`
		font-family: ${theme.typography.families.secondary};
		font-weight: ${theme.typography.weights.secondary.regular};
		font-size: 20px;
		line-height: 120%;

		@media ${theme.medias.desktop} {
			font-size: 24px;
		}

		&.highEmphasis {
			color: ${theme.colors.blueGray900};
		}
	`,
	headingMedium: css`
		font-family: ${theme.typography.families.secondary};
		font-weight: ${theme.typography.weights.secondary.regular};
		font-size: 24px;
		line-height: 120%;

		&.highEmphasis {
			color: ${theme.colors.brandColorSecondary};
		}
	`,
	pageContainer: css``,
	paragraph: css`
		font-family: ${theme.typography.families.primary};
		font-weight: ${theme.typography.weights.primary.regular};
		font-size: 14px;
		line-height: 150%;

		@media ${theme.medias.desktop} {
			font-size: 16px;
		}

		strong {
			font-weight: ${theme.typography.weights.primary.semibold};
		}

		&.lowEmphasis {
			color: ${theme.colors.blueGray400};
		}
	`,
	subtitle: css`
		color: ${theme.colors.blueGray900};
		font-family: ${theme.typography.families.primary};
		font-weight: normal;
		font-size: 18px;
		line-height: 120%;
		text-align: center;

		@media ${theme.medias.desktop} {
			font-size: 20px;
		}

		strong {
			font-weight: ${theme.typography.weights.primary.semibold};
		}

		&.highEmphasis {
			color: ${theme.colors.brandColorPrimary};
		}
	`
});
