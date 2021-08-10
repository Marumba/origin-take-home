/* eslint-disable sonarjs/no-nested-template-literals */
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import * as S from '../shared/style.shared';

const $hoverScale = 'scale(1.2)';
const $activeScale = 'scale(1.4)';
const $forwardBtnRotate = 'rotate(180deg)';

export const InputMonthPicker = styled.div`
	&:focus {
		background: red;
	}
`;

export const MonthYearWrapper = styled(S.Wrapper)`
	border: 0;

	cursor: pointer;

	flex-direction: column;
	justify-content: center;
	flex: 1;

	z-index: 5;
`;

const CommonButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: flex-start;

	width: 50%;
	height: 56px;
	padding: 0 14px;

	position: absolute;
	z-index: 10;

	${({ btnPressed }) => btnPressed && `svg { transform: ${$hoverScale}; }`}

	transition: transform ${({ theme }) => theme.animations.durations.fastest} ease-in-out;

	@media ${({ theme }) => theme.medias.desktop} {
		padding: 0;

		svg {
			margin-left: 12px;
		}

		&:hover {
			svg {
				transform: ${$hoverScale};
			}
		}
	}

	&:active {
		svg {
			transform: ${$activeScale};
			transition: 0.1s;
		}
	}
`;
export const BackBtn = styled(CommonButton)`
	left: 0;
`;
export const ForwardBtn = styled(CommonButton)`
	justify-content: flex-end;
	right: 0;

	${({ btnPressed }) => btnPressed && `svg { transform: ${$forwardBtnRotate} ${$hoverScale}; }`}

	@media ${({ theme }) => theme.medias.desktop} {
		svg {
			margin-left: 0;
			margin-right: 12px;
		}

		&:hover {
			svg {
				transform: ${$forwardBtnRotate} ${$hoverScale};
			}
		}
	}

	&:active {
		svg {
			transform: ${$forwardBtnRotate} ${$activeScale};
		}
	}
`;

const CommonText = styled.div`
	user-select: none;
	${({ theme }) => theme.mixins.paragraph}
`;
export const Month = styled(CommonText)``;
export const Year = styled(CommonText)``;

export const inputDefaultCustomCss = css`
	input {
		width: auto;

		transform: translateX(-50%);

		position: absolute;
		left: 50%;
		z-index: 1;
	}
`;
