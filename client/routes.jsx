import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '~/pages/Home';
import Simulator from '~/pages/Simulator';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" render={Home} />
				<Route exact path="/:slug" render={Simulator} />
			</Switch>
		</Router>
	);
};

export default Routes;
