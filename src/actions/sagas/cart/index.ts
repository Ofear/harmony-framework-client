import {
	all, fork, put, takeLatest, select
} from 'redux-saga/effects';
import { getInstances } from '@base/features/base-cart';
import CartActions, { CartTypes, cartSelector } from 'actions/redux/cart';
import { AddToCartAction, CartItem } from 'actions/redux/cart/interfaces';

const [instance] = getInstances();

function* addSaga(action: AddToCartAction) {
	const { item } = action;
	const cartItems: CartItem[] = yield select(cartSelector.getCartItems);
	const cartId: number = yield select(cartSelector.getCartId);

	if (!cartId || !cartItems || !cartItems.length) {
		yield put(CartActions.setCartId(Math.floor((Math.random() * 10000000) + 1).toString()));
	}

	yield put(instance.actions.add(item.id.toString(), item));
}

function* watchMySaga() {
	yield takeLatest(CartTypes.ADD_TO_CART, addSaga);
}

function* cartSaga() {
	yield all([
		fork(watchMySaga)
	]);
}

export default cartSaga;
