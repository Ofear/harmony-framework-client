import { combineReducers, Reducer } from 'redux';

import baseReducers, { IBaseApplicationState } from '../../base/features/base-reducers';
import { ICatalogState } from './catalog/interfaces';

export interface IApplicationState extends IBaseApplicationState {
	catalog: ICatalogState;
}

const rootReducer: Reducer<IApplicationState> = combineReducers<IApplicationState>({
	...baseReducers,

	catalog: require('./catalog').reducer
});

export default rootReducer;
