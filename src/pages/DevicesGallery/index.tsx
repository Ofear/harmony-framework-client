import * as React from 'react';
import { Dispatch } from 'redux';
import { TranslateFunction } from 'react-localize-redux';
import { baseConnect } from '@base/features/base-redux-react-connect';
import {
	Container, Row, CardDeck, Button, Form
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

interface State {
	searchValue: string;
}

class DeviceGallery extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			searchValue: ''
		};
	}

	getQuantity(id: number | string): number {
		const { cartItems } = this.props;

		const item = cartItems.find((cartItem) => cartItem.id === id);

		if (item) {
			return item.quantity as number;
		}

		return 0;
	}
	componentDidMount() {
		const { getDeviceList, deviceList } = this.props;

		if (!deviceList || !deviceList.length) {
			getDeviceList();
		}
	}

	render() {
		const { searchValue } = this.state;
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
				<Form>
					<Form.Group>
						<Form.Control
							style={{ width: '30%' }}
							type="text"
							placeholder="search..."
							onChange={(e) => this.setState({ searchValue: e.target.value.toLowerCase() })}
						/>
					</Form.Group>
				</Form>
				<Row>
					<CardDeck>
						{deviceList.map((device: Device) => {
							if (!searchValue || device.name.toLowerCase().includes(searchValue)) {
								return (
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
								);
							}

							return null;
						})}
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
