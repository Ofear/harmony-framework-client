import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LocalizeProvider } from 'react-localize-redux';

/* -------- Load Styles --------- */
import 'bootstrap/dist/css/bootstrap.min.css'; // Can be replace with other style framework
import 'public/sass/style.scss';

/* -------- Harmony Features --------- */
import Store, { persistor } from '@base/features/base-store';
import '@base/features/base-redux-websocket-actions';
import '@base/features/base-translations';
import '@base/features/base-global-spinner';

/* -------- Routes ---------- */
import routes from 'routes';

/* -------- render application ---------- */
ReactDOM.render(
	<Provider store={Store}>
		<PersistGate persistor={persistor}>
			<LocalizeProvider store={Store}>
				<BrowserRouter>
					{routes}
				</BrowserRouter>
			</LocalizeProvider>
		</PersistGate>
	</Provider>,
	document.getElementById('app')
);
