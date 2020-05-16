import * as React from 'react';
import { Dispatch } from 'redux';
import { TranslateFunction } from 'react-localize-redux';
import { baseConnect } from '@base/features/base-redux-react-connect';
import {
	Container, Row, CardDeck, Button
} from 'react-bootstrap';
import './style.scss';
import { ApplicationState } from 'actions/redux';
import { RoutesPath } from 'routes';
import CatalogActions, { catalogSelector } from 'actions/redux/catalog';
import { Device } from 'actions/redux/catalog/interfaces';
import CartActions, { cartSelector } from 'actions/redux/cart';
import { CartItem } from 'actions/redux/cart/interfaces';
import DeviceCard from 'common-components/DeviceCard';

interface Props {
	getDeviceList: () => any;
	addToCart: (item: CartItem) => any;
	removeFromCart: (id: number | string) => any;
	clearCart: () => any;
	deviceList: Device[];
	cartItems: CartItem[];
	translate: TranslateFunction;
	history: any;
}

class DeviceGallery extends React.Component<Props> {
	getQuantity(id: number | string): number {
		const { cartItems } = this.props;

		const item = cartItems.find((cartItem) => cartItem.id === id);

		if (item) {
			return item.quantity as number;
		}

		return 0;
	}
	componentDidMount() {
		const { getDeviceList } = this.props;

		getDeviceList();
	}

	render() {
		const {
			deviceList, translate, addToCart, removeFromCart, cartItems, history, clearCart
		} = this.props;

		if (!deviceList || !deviceList.length) {
			return null;
		}

		return (
			<Container>
				<Row>
					<h1>{translate('deviceGallery.pageTitle')}</h1>
				</Row>
				<br />
				<Row>
					<CardDeck>
						{deviceList.map((device: Device) => (
							<DeviceCard
								key={device.id}
								device={device}
								buttonTitle={translate('deviceGallery.addToCartButton')}
								removeButtonTitle={translate('deviceGallery.removeFromCartButton')}
								priceTitle={translate('deviceGallery.priceTitle')}
								onBuyClick={addToCart}
								onRemoveClick={removeFromCart}
								quantity={this.getQuantity(device.id)}
							/>
						))}
					</CardDeck>
				</Row>

				<Row className="footer-button-row">
					<Button
						className="footer-buttons"
						variant="success"
						size="lg"
						disabled={!cartItems || !cartItems.length}
						onClick={() => history.push(RoutesPath.CHECKOUT)}
					>
						Checkout
					</Button>
					<Button
						className="footer-buttons"
						variant="primary"
						size="lg"
						disabled={!cartItems || !cartItems.length}
						onClick={clearCart}
					>
						Clear Cart
					</Button>
				</Row>
			</Container>
		);
	}
}

export default baseConnect(
	DeviceGallery,
	(state: ApplicationState) => ({
		deviceList: catalogSelector.devices(state),
		cartItems: cartSelector.getCartItems(state)
	}),
	(dispatch: Dispatch) => ({
		getDeviceList: () => dispatch(CatalogActions.getDeviceList()),
		addToCart: (item: CartItem) => dispatch(CartActions.addToCart(item)),
		removeFromCart: (id: number | string) => dispatch(CartActions.removeFromCart(id)),
		clearCart: () => dispatch(CartActions.clearCart())
	})
);
