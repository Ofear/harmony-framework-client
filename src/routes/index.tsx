import * as React from 'react';
import { Switch } from 'react-router-dom';
import Route from './PageContainer';

/* -------------- Pages --------------- */
import App from './App';
import DeviceGalleryPage from 'pages/DevicesGallery';
import Checkout from 'pages/Checkout';

/* -------------- Routes Paths --------------- */
export enum RoutesPath {
	ROOT = '/',
	ERROR_PAGE = '/error-page',
	CHECKOUT = '/checkout'
}

export default (
	<App>
		<Switch>
			<Route exact path={RoutesPath.ROOT} component={DeviceGalleryPage} />
			<Route exact path={RoutesPath.CHECKOUT} component={Checkout} />
			<Route exact path={RoutesPath.ERROR_PAGE} component={() => <div>error page</div>} />
		</Switch>
	</App>
);
