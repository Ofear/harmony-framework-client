import Immutable, { from } from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';
import { IApplicationState } from '../index';
import {
	ISessionPersistDataState,
	TypesNames,
	IActionCreator,
	ISetSessionDataExampleAction
} from './interfaces';

/* ------------- Types and Action Creators ------------- */

const { Creators } = createActions<TypesNames, IActionCreator>({
	setSessionDataExample: ['sessionDataExample']
});

export const SessionDataTypes = TypesNames;
export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable<ISessionPersistDataState>({
	sessionDataExample: 'Initial Data Example'
});

/* ------------- Selectors ------------- */

export const sessionDataSelector = {
	sessionDataExample: (state: IApplicationState) =>
		state.sessionPersistData.sessionDataExample
};

/* ------------- Reducers ------------- */

const setSessionDataExampleReducer = (
	state: any,
	action: ISetSessionDataExampleAction
) => {
	const newState = from(state); // persistence provide us state without Immutable functionality  - therefor we convert state to use Immutable in that case
	const { sessionDataExample } = action;
	return newState.merge({ sessionDataExample });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
	[SessionDataTypes.SET_SESSION_DATA_EXAMPLE]: setSessionDataExampleReducer
});
