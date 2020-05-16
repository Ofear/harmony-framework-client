import * as React from 'react';
import { Dispatch } from 'redux';
import { TranslateFunction } from 'react-localize-redux';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { Container, Row, CardDeck } from 'react-bootstrap';
import { ApplicationState } from 'actions/redux';
import CatalogActions, { catalogSelector } from 'actions/redux/catalog';
import { Device } from 'actions/redux/catalog/interfaces';
import { CartItem, TypesNames } from 'actions/redux/cart/interfaces';
import DeviceCard from 'common-components/DeviceCard';

interface Props {
	getDeviceList: () => void;
	addToCart: (item: CartItem) => void;
	deviceList: Device[];
	translate: TranslateFunction;
}

class DeviceGallery extends React.Component<Props> {
	componentDidMount() {
		const { getDeviceList } = this.props;

		getDeviceList();
	}

	render() {
		const { deviceList, translate, addToCart } = this.props;

		if (!deviceList || !deviceList.length) {
			return null;
		}

		return (
			<Container>
				<Row>
					<CardDeck>
						{deviceList.map((device: Device) => (
							<DeviceCard
								key={device.id}
								device={device}
								buttonTitle={translate('deviceGallery.addToCartButton')}
								priceTitle={translate('deviceGallery.priceTitle')}
								onBuyClick={addToCart}
							/>
						))}
					</CardDeck>
				</Row>
			</Container>
		);
	}
}

export default baseConnect(
	DeviceGallery,
	(state: ApplicationState) => ({
		deviceList: catalogSelector.devices(state)
	}),
	(dispatch: Dispatch) => ({
		getDeviceList: () => dispatch(CatalogActions.getDeviceList()),
		addToCart: (payload: CartItem) => dispatch({ type: TypesNames.ADD_TO_CART, item: payload })
	})
);
