import * as React from 'react';
import DeviceGalleryPage from 'pages/DevicesGallery';
import Route from './PageContainer';

/* -------------- Pages --------------- */
import App from './App';

/* -------------- Routes Paths --------------- */
export enum RoutesPath {
	ROOT = '/',
	ERROR_PAGE = '/error-page'
}

export default (
	<App>
		<Route exact path={RoutesPath.ROOT} component={DeviceGalleryPage} />
		<Route exact path={RoutesPath.ERROR_PAGE} component={() => <div>error page</div>} />
	</App>
);
