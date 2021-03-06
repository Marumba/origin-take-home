import React from 'react';
import { customCssType, string } from '~/types';

import originLogo from '~/assets/imgs/logos/logo-origin.svg';

import * as S from './style';

function OriginLogo({ alt, customCss, href, title, type }) {
	const DefaultLogo = () => <S.OriginLogo customCss={customCss} src={originLogo} alt={alt} />;
	const logoTypeMap = {
		withLink: (
			<S.Link href={href} title={title}>
				<DefaultLogo />
			</S.Link>
		),
		default: <DefaultLogo />
	};

	return logoTypeMap?.[type] || logoTypeMap.default;
}

OriginLogo.propTypes = {
	alt: string,
	customCss: customCssType,
	href: string,
	title: string,
	type: string
};

OriginLogo.defaultProps = {
	alt: 'Origin Logo',
	customCss: undefined,
	href: '/',
	title: 'Origin Home',
	type: ''
};

export default React.memo(OriginLogo);
