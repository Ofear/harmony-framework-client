import { fork, all } from 'redux-saga/effects';

/* ------------- Sagas ------------- */
import catalogSaga from './catalog';
import cartSaga from './cart';

export default function* () {
	yield all([fork(catalogSaga)]);
	yield all([fork(cartSaga)]);
}
