import { reducer as form } from 'redux-form';
import { persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/lib/storage/session';
import { localizeReducer } from 'react-localize-redux';
import { pendingTasksReducer } from 'react-redux-spinner';
import errorHandlerReducer from '@base/features/base-error-handler/reducer';
import { ErrorHandlerRequest } from '@base/features/base-error-handler';
import { makeCart } from '@base/features/base-cart';
import { reducer as localPersistDataReducer } from 'actions/redux/localPersistData';
import { reducer as sessionPersistDataReducer } from 'actions/redux/sessionPersistData';
import { LocalPersistDataState } from 'actions/redux/localPersistData/interfaces';
import { SessionPersistDataState } from 'actions/redux/sessionPersistData/interfaces';

export interface BaseApplicationState {
	localPersistData: LocalPersistDataState;
	sessionPersistData: SessionPersistDataState;
	localize: any;
	form: any;
	errorHandler: ErrorHandlerRequest<any>;
	pendingTasks: any;
}

const localPersistConfig = {
	storage: localStorage,
	key: 'localPersistData'
};

const sessionPersistConfig = {
	storage: sessionStorage,
	key: 'sessionPersistData',
	blackList: []
};

export default {
	form,
	localPersistData: persistReducer(localPersistConfig, localPersistDataReducer),
	sessionPersistData: persistReducer(sessionPersistConfig, sessionPersistDataReducer),
	localize: localizeReducer,
	cart: makeCart('cart').reducer,
	errorHandler: errorHandlerReducer,
	pendingTasks: pendingTasksReducer
};
