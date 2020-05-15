import * as React from 'react';
import 'react-redux-spinner/dist/react-redux-spinner.css';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { Spinner } from 'react-redux-spinner'; // Can be Replace with your Custom Spinner
import Localization from 'containers/Localization';
import ErrorHandler from 'containers/ErrorHandler';

interface IProps {
	children: any;
}

class App extends React.Component<IProps> {
	render() {
		return (
			<>
				<ErrorHandler />
				<Spinner config={{}} />
				<Localization />
				{this.props.children}
			</>
		);
	}

	renderMobile() {
		return <div>Hello Wrold</div>;
	}
}

export default baseConnect(
	App,
	(/* state */) => {
		return {};
	},
	{}
);
