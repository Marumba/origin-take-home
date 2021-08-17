import React from 'react';

import { Container } from '~/components';

import HouseSimulation from './partials/houseSimulation';
import * as S from './style';

function Main() {
	return (
		<S.MainContainer data-testid="mainPage">
			<Container as="main">
				<S.MainTitle className="highEmphasis">
					Let&apos;s plan your <strong>saving goal</strong>.
				</S.MainTitle>
				<HouseSimulation />
			</Container>
		</S.MainContainer>
	);
}

export default Main;
