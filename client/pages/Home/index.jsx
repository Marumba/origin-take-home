import React from 'react';

import Card from '~/components/minimal/Card';

import * as S from './style';

const Home = () => {
	const renderComponents = Array(6).fill(<Card customCss={theme => S.smallCard(theme)} />);

	return (
		<S.Home>
			<S.Wrapper>
				<S.Title className="highEmphasis">Here are your savings goals!</S.Title>
				{renderComponents}
			</S.Wrapper>
		</S.Home>
	);
};

export default Home;
