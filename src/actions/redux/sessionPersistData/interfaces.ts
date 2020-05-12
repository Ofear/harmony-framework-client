import { Action } from 'redux';

export interface ISessionPersistDataState {
    sessionDataExample: string;
}

export enum TypesNames {
    SET_SESSION_DATA_EXAMPLE = 'SET_SESSION_DATA_EXAMPLE'
}

export interface IActionCreator {
    setSessionDataExample: (SessionDataExample: string) => any;
}

export interface ISetSessionDataExampleAction extends Action<TypesNames.SET_SESSION_DATA_EXAMPLE> {
    sessionDataExample: string;
}

