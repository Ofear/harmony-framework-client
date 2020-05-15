import { combineReducers, Reducer } from 'redux';

import baseReducers, { BaseApplicationState } from '../../base/features/base-reducers';
import { CatalogState } from './catalog/interfaces';

export interface ApplicationState extends BaseApplicationState {
	catalog: CatalogState;
}

const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
	...baseReducers,

	catalog: require('./catalog').reducer
});

export default rootReducer;
