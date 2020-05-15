import * as React from 'react';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { CustomRoute } from '@base/features/base-decorator';

const routeDecorator = (WrappedComponent: any) => {
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

export default CustomRoute(routeDecorator);
