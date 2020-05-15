import Immutable from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';
import { ApplicationState } from '../index';
import {
	CartState, TypesNames, ActionCreator, SetCartIdAction
} from './interfaces';

/* ------------- Types and Action Creators ------------- */

const { Creators } = createActions<TypesNames, ActionCreator>({
	setCartId: ['cartId'],
	addToCart: ['item']
});

export const CartTypes = TypesNames;
export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable<CartState>({
	cartId: 198822,
	items: []
});

/* ------------- Selectors ------------- */

export const cartSelector = {
	getCartId: (state: ApplicationState) => state.cart.cartId
};

/* ------------- Reducers ------------- */

const setCartIdReducer = (state: any, action: SetCartIdAction) => {
	const { cartId } = action;
	return state.merge({ cartId });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
	[CartTypes.SET_CART_ID]: setCartIdReducer
});
