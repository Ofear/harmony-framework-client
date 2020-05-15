import { Action } from 'redux';

export interface ICatalogState {
	deviceList: IDevice[];
}

export enum TypesNames {
	GET_DEVICE_LIST = 'GET_DEVICE_LIST',
	SET_DEVICE_LIST = 'SET_DEVICE_LIST'
}

export interface IActionCreator {
	getDeviceList: () => Action<TypesNames.GET_DEVICE_LIST>;
	setDeviceList: (deviceList: IDevice[]) => ISetDeviceListAction;
}

export interface ISetDeviceListAction extends Action<TypesNames.SET_DEVICE_LIST> {
	deviceList: IDevice[];
}

export interface IDevice {
	id: number;
	name: string;
	price: string;
	description: string;
	image: string;
	brand: string;
}
