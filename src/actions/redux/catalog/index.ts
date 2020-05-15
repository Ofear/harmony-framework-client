import Immutable from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';
import { IApplicationState } from '../index';
import { TypesNames, IActionCreator, ICatalogState, ISetDeviceListAction } from './interfaces';

/* ------------- Types and Action Creators ------------- */

const { Creators } = createActions<TypesNames, IActionCreator>({
	getDeviceList: [],
	setDeviceList: ['deviceList']
});

export const CatalogTypes = TypesNames;
export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable<ICatalogState>({
	deviceList: []
});

/* ------------- Selectors ------------- */

export const catalogSelector = {
	devices: (state: IApplicationState) => state.catalog.deviceList
};

/* ------------- Reducers ------------- */

const setDeviceListReducer = (state: any, action: ISetDeviceListAction) => {
	const { deviceList } = action;
	return state.merge({ deviceList });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
	[CatalogTypes.SET_DEVICE_LIST]: setDeviceListReducer
});
