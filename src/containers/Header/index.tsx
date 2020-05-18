/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { Dispatch } from 'redux';
import { TranslateFunction } from 'react-localize-redux';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions/redux';
import { RoutesPath } from 'routes';
import CartActions, { cartSelector } from 'actions/redux/cart';
import {
	Row, Button
} from 'react-bootstrap';
import './style.scss';
import { CartItem } from 'actions/redux/cart/interfaces';

interface Props {
	cartItems: CartItem[];
	clearCart: () => any;
	translate: TranslateFunction;
	history: any;
}
interface HeaderState {
	cartToggle: boolean;
}
class Header extends React.Component<Props, HeaderState> {
	constructor(props: Props) {
		super(props);
		this.state = {
			cartToggle: false
		};
	}
	setCartToggle() {
		const { cartToggle } = this.state;
		this.setState({
			cartToggle: !cartToggle
		});
	}
	getTotalPrice(cartItems: CartItem[]): number {
		return cartItems.reduce((total, item): number => total + item.price, 0);
	}

	render() {
		const {
			cartItems,
			clearCart,
			translate,
			history
		} = this.props;
		const { cartToggle } = this.state;
		const cartItemsLength = cartItems && cartItems.length ? cartItems.length : 0;
		console.log(cartItems);
		return (
			<>
				<nav>
					<div className="container">
						<ul className="navbar-left">
							<li><a href="/">Home</a></li>
						</ul>

						<ul className="navbar-right">
							<li>
								<a
									href="#"
									automation-id="open-cart"
									onClick={() => { this.setCartToggle(); }}
									id="cart"
								>
									<i className="fa fa-shopping-cart" />
									Cart
									<span className="badge">
										{cartItemsLength}
									</span>
								</a>
							</li>
						</ul>
					</div>
				</nav>

				<div className="container">
					<div className="shopping-cart" style={cartToggle ? {} : { display: 'none' }}>
						<div className="shopping-cart-header">
							<i className="fa fa-shopping-cart cart-icon" />
							<span className="badge">
								{cartItemsLength}
							</span>
							<div className="shopping-cart-total">
								<span className="lighter-text">Total:</span>
								<span className="main-color-text">{`$${this.getTotalPrice(cartItems)}`}</span>
							</div>
						</div>

						<ul className="shopping-cart-items" automation-id="shopping-cart-items">
							{
								cartItems.map((item) => {
									return (
										<li className="clearfix" key={item.id}>
											<img
												width={64}
												height={64}
												className="mr-3"
												src={item.image}
												alt="Generic placeholder"
											/>
											<span className="item-name">{item.name}</span>
											<span className="item-price">${item.price}</span>
											<span className="item-quantity">Quantity: 01</span>
										</li>
									);
								})
							}

						</ul>

						<Row>
							<Button
								className="footer-buttons"
								variant="success"
								size="lg"
								disabled={!cartItems || !cartItems.length}
								onClick={() => { this.setCartToggle(); history.push(RoutesPath.CHECKOUT); }}
							>
								{translate('deviceGallery.checkoutButton')}
							</Button>
							<Button
								className="footer-buttons"
								variant="primary"
								size="lg"
								disabled={!cartItems || !cartItems.length}
								onClick={clearCart}
							>
								{translate('deviceGallery.clearCartButton')}
							</Button>
						</Row>
					</div>
				</div>
			</>
		);
	}
}

export default baseConnect(
	Header,
	(state: ApplicationState) => ({
		cartItems: cartSelector.getCartItems(state)
	}),
	(dispatch: Dispatch) => ({
		clearCart: () => dispatch(CartActions.clearCart())
	})
);
