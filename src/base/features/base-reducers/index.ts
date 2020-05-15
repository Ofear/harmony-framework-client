import { reducer as form } from 'redux-form';
import { persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/lib/storage/session';
import { localizeReducer } from 'react-localize-redux';
import { pendingTasksReducer } from 'react-redux-spinner';
import errorHandlerReducer from '@base/features/base-error-handler/reducer';
import { IErrorHandlerRequest } from '@base/features/base-error-handler';
import { reducer as localPersistDataReducer } from 'actions/redux/localPersistData';
import { reducer as sessionPersistDataReducer } from 'actions/redux/sessionPersistData';
import { ILocalPersistDataState } from 'actions/redux/localPersistData/interfaces';
import { ISessionPersistDataState } from 'actions/redux/sessionPersistData/interfaces';

export interface IBaseApplicationState {
	localPersistData: ILocalPersistDataState;
	sessionPersistData: ISessionPersistDataState;
	localize: any;
	form: any;
	errorHandler: IErrorHandlerRequest<any>;
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
	errorHandler: errorHandlerReducer,
	pendingTasks: pendingTasksReducer
};
