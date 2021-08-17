import React from 'react';

import { Container } from '~/components';

import Card from '~/components/minimal/Card';

import * as S from './style';

const Home = () => {
	const renderComponents = Array(6).fill(<Card customCss={theme => S.smallCard(theme)} />);

	return (
		<S.Home>
			<Container as="main" customCss={theme => S.customContainerCss(theme)}>
				<S.Title>Here are your savings goals!</S.Title>
				<S.Wrapper>{renderComponents}</S.Wrapper>
			</Container>
		</S.Home>
	);
};

export default Home;
