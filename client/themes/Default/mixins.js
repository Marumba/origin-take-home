import { css } from '@emotion/react';

export default theme => ({
	boxShadow: {
		level4: css`
			box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
			border-radius: 8px;
		`
	},
	button: css`
		font-family: ${theme.typography.primary};
		font-weight: ${theme.typography.weight.primary.semibold};
		font-size: 16px;
		line-height: 20px;
		text-align: center;
	`,
	cta: css`
		background: ${theme.color.brandColorPrimary};

		border-radius: 32px;

		height: 56px;
		max-width: 320px;
	`,
	caption: css`
		font-family: ${theme.typography.primary};
		font-weight: ${theme.typography.weight.primary.regular};
		font-size: 12px;
		line-height: 16px;

		strong {
			font-weight: ${theme.typography.weight.primary.semibold};
		}
	`,
	description: css`
		font-family: ${theme.typography.primary};
		font-weight: ${theme.typography.weight.primary.regular};
		font-size: 12px;
		line-height: 150%;
	`,
	headingSmall: css`
		font-family: ${theme.typography.secondary};
		font-weight: ${theme.typography.weight.secondary.regular};
		font-size: 20px;
		line-height: 120%;
	`,
	headingMedium: css`
		font-family: ${theme.typography.secondary};
		font-weight: ${theme.typography.weight.secondary.regular};
		font-size: 24px;
		line-height: 120%;
	`,
	paragraph: css`
		font-family: ${theme.typography.primary};
		font-weight: ${theme.typography.weight.primary.regular};
		font-size: 14px;
		line-height: 150%;

		strong {
			font-weight: ${theme.typography.weight.primary.semibold};
		}
	`,
	subtitle: css`
		color: ${theme.color.blueGray900};
		font-family: ${theme.typography.primary};
		font-weight: normal;
		font-size: 18px;
		line-height: 120%;
		text-align: center;
	`
});
