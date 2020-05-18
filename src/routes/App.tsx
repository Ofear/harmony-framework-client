import * as React from 'react';
import 'react-redux-spinner/dist/react-redux-spinner.css';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { Spinner } from 'react-redux-spinner'; // Can be Replace with your Custom Spinner
import Localization from 'containers/Localization';
import ErrorHandler from 'containers/ErrorHandler';
import Header from 'containers/Header';

interface Props {
	children: any;
}

class App extends React.Component<Props> {
	render() {
		const { children } = this.props;

		return (
			<>
				<ErrorHandler />
				<Spinner config={{}} />
				<Localization />
				<Header />
				{children}
			</>
		);
	}

	renderMobile() {
		const { children } = this.props;

		return (
			<>
				<ErrorHandler />
				<Spinner config={{}} />
				<Localization />
				<Header />
				{children}
			</>
		);
	}
}

export default baseConnect(
	App,
	(/* state */) => ({}),
	{}
);
