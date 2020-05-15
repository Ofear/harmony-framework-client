import Immutable, { from } from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';
import { IApplicationState } from '../index';
import {
	ILocalPersistDataState,
	TypesNames,
	IActionCreator,
	ISetLocalDataExampleAction
} from './interfaces';

/* ------------- Types and Action Creators ------------- */

const { Creators } = createActions<TypesNames, IActionCreator>({
	setLocalDataExample: ['localDataExample']
});

export const LocalDataTypes = TypesNames;
export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable<ILocalPersistDataState>({
	localDataExample: 'Initial Data Example'
});

/* ------------- Selectors ------------- */

export const localDataSelector = {
	localDataExample: (state: IApplicationState) =>
		state.localPersistData.localDataExample
};

/* ------------- Reducers ------------- */

const setLocalDataExampleReducer = (
	state: any,
	action: ISetLocalDataExampleAction
) => {
	const newState = from(state); // persistence provide us state without Immutable functionality  - therefor we convert state to use Immutable in that case
	const { localDataExample } = action;
	return newState.merge({ localDataExample });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
	[LocalDataTypes.SET_LOCAL_DATA_EXAMPLE]: setLocalDataExampleReducer
});
