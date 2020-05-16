import * as React from 'react';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions/redux';
// import CheckoutActions, { checkoutSelector } from 'actions/redux/checkout';

interface Props {

}

class Checkout extends React.Component<Props> {
	render() {
		return (
			<div>
				Checkout New Container
			</div>
		);
	}
}

export default baseConnect(Checkout,
	(state: ApplicationState) => {
		return {

		};
	},
	{

	}
);
