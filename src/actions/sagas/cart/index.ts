import {
	all, fork, put, takeLatest
} from 'redux-saga/effects';
import { CartTypes } from 'actions/redux/cart';
import { AddToCartAction } from 'actions/redux/cart/interfaces';
import { getInstances } from '@base/features/base-cart';

const [instance] = getInstances();

function* addSaga(action: AddToCartAction) {
	const { item } = action;

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
