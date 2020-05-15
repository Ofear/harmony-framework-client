import * as React from 'react';
import { Route } from 'react-router-dom';
import { baseConnect } from '@base/features/base-redux-react-connect';

const pageDecorator = (WrappedComponent: any) => {
	// eslint-disable-next-line react/prefer-stateless-function
	class PageContainer extends React.Component<any> {
		render() {
			// eslint-disable-next-line react/jsx-props-no-spreading
			return <WrappedComponent {...this.props} />;
		}
	}

	return baseConnect(
		PageContainer,
		(/* state: any */) => ({}),
		{}
	);
};

const CustomRoute = ({ component, ...rest }: any) => (
	<Route
		// eslint-disable-next-line react/jsx-props-no-spreading
		{...rest}
		render={(props): React.ComponentElement<any, any> => {
			const ComponentToRender = pageDecorator(component);

			// eslint-disable-next-line react/jsx-props-no-spreading
			return <ComponentToRender {...props} />;
		}}
	/>
);

export default CustomRoute;
