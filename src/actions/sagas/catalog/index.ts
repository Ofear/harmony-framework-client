import {
	all, call, fork, put, takeLatest
} from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import api from 'requests';
import CatalogActions, { CatalogTypes } from 'actions/redux/catalog';
import { Device } from 'actions/redux/catalog/interfaces';
import GenericMobileImage from './generic-mobile.jpg';

const getDevicePrice = (device: any): number => {
	if (device.price && device.price.includes('&#36;')) {
		return parseFloat(device.price.split('/')[0].split(';')[2].replace(',', ''));
	}

	return Math.floor((Math.random() * 1000) + 1);
};

function* getDevices() {
	try {
		const response: AxiosResponse = yield call(api.getDevices);
		const genericImage = GenericMobileImage;

		const deviceList: Device[] = response.data.map((device: any): Device => {
			const newDevice: Device = {
				id: device.DeviceName,
				name: device.DeviceName,
				price: getDevicePrice(device),
				description: `${device.type} ${device.status}`,
				brand: device.Brand,
				image: genericImage
			};

			return newDevice;
		});

		yield put(CatalogActions.setDeviceList(deviceList));
	} catch (e) {
		// eslint-disable-next-line no-console
		console.log(e);
	}
}

function* watchGetDevices() {
	yield takeLatest(CatalogTypes.GET_DEVICE_LIST, getDevices);
}

function* catalogSaga() {
	yield all([fork(watchGetDevices)]);
}

export default catalogSaga;
