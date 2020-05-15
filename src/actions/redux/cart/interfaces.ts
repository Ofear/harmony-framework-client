import { Action } from 'redux';
import { BaseCartState } from '@base/features/base-cart/interfaces';

export interface CartState extends BaseCartState<CartItem> {
	cartId?: number;
}

export enum TypesNames {
	SET_CART_ID = 'SET_CART_ID',
	ADD_TO_CART = 'ADD_TO_CART'
}

export interface ActionCreator {
	setCartId: (cartId: string) => SetCartIdAction;
	addToCart: (item: CartItem) => AddToCartAction;
}

export interface SetCartIdAction extends Action<TypesNames.SET_CART_ID> {
	cartId: string;
}
export interface AddToCartAction extends Action<TypesNames.ADD_TO_CART> {
	item: CartItem;
}

export interface CartItem {
	id: number | string;
	brand: string;
	name: string;
	description: string;
	image?: string;
	price: number | string;
	quantity?: number;
}
