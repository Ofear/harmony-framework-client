import { Action } from 'redux';

export interface ILocalPersistDataState {
	localDataExample: string;
}

export enum TypesNames {
	SET_LOCAL_DATA_EXAMPLE = 'SET_LOCAL_DATA_EXAMPLE'
}

export interface IActionCreator {
	setLocalDataExample: (localDataExample: string) => any;
}

export interface ISetLocalDataExampleAction extends Action<TypesNames.SET_LOCAL_DATA_EXAMPLE> {
	localDataExample: string;
}
