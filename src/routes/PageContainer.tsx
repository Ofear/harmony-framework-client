import * as React from 'react';
import { Route } from 'react-router-dom';
import { baseConnect } from '@base/features/base-redux-react-connect';

const pageDecorator = (WrappedComponent: any) => {
	class PageContainer extends React.Component<any> {
		render() {
			return <WrappedComponent {...this.props} />;
		}
	}

	return baseConnect(
		PageContainer,
		(state: any) => {
			return {};
		},
		{}
	);
};

const CustomRoute = ({ component, ...rest }: any) => {
	return (
		<Route
			{...rest}
			render={props => {
				const ComponentToRender = pageDecorator(component);

				return <ComponentToRender {...props} />;
			}}
		/>
	);
};

export default CustomRoute;
