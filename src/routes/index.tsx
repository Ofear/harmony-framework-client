import * as React from 'react';
import { Switch } from 'react-router-dom';
import Route from './PageContainer';

/* -------------- Pages --------------- */
import App from './App';
import DeviceGalleryPage from 'pages/DevicesGallery';

/* -------------- Routes Paths --------------- */
export enum RoutesPath {
	ROOT = '/',
	ERROR_PAGE = '/error-page'
}

export default (
	<App>
		<Switch>
			<Route exact path={RoutesPath.ROOT} component={DeviceGalleryPage} />
			<Route exact path={RoutesPath.ERROR_PAGE} component={() => <div>error page</div>} />
		</Switch>
	</App>
);
