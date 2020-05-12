import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import {AxiosResponse} from 'axios';
import api from 'requests';
import CatalogActions, { CatalogTypes } from 'actions/redux/catalog';
import { IDevice } from 'actions/redux/catalog/interfaces';

function* getDevices() {
    try {
        const response: AxiosResponse<IDevice[]> = yield call(api.getDevices);

        yield put(CatalogActions.setDeviceList(response.data));
    } catch (e) {
        console.log(e);
    }

}

function* watchGetDevices() {
    yield takeLatest(CatalogTypes.GET_DEVICE_LIST, getDevices);
}

function* catalogSaga() {
    yield all([
        fork(watchGetDevices)
    ]);
}

export default catalogSaga;