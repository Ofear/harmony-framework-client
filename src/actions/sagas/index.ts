import { fork, all } from 'redux-saga/effects';

/* ------------- Sagas ------------- */
import catalogSaga from './catalog';

export default function* () {
	yield all([fork(catalogSaga)]);
}
