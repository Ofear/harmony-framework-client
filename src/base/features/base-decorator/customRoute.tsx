import * as React from 'react';
import { Route } from 'react-router-dom';

const CustomRoute = (pageDecorator: Function) => ({ component, ...rest }: any) => (
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
