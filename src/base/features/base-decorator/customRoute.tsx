import * as React from 'react';
import { Route } from 'react-router-dom';

const CustomRoute = (pageDecorator: Function) => ({ component, ...rest }: any) => {
	const ComponentToRender = pageDecorator(component);

	return (
		<Route
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...rest}
			component={ComponentToRender}
		/>
	);
};

export default CustomRoute;
