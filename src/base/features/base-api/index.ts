import axios, { AxiosResponse } from 'axios';
import { config as appConfig } from 'config';
import { dispatchErrorHandler } from '@base/features/base-error-handler';

class Request {
	constructor() {
		if (sessionStorage.length) {
			const user = JSON.parse(sessionStorage.getItem('user') || '{}');
			const AUTH_TOKEN = user ? user.Authorization : null;

			this.setCommonHeader('Authorization', AUTH_TOKEN);
		}
	}

	setCommonHeader(key: string, value: string) {
		axios.defaults.headers.common[key] = value;
	}

	broadcastAction(action: any): any {
		if (!action) return null;

		const callConfig = {
			method: 'post',
			baseURL: appConfig.ROOT_SERVER_URL,
			url: '/users/broadcastAction',
			data: {
				action,
				token: typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('wsa_token') : {}
			}
		};

		return this.call(callConfig);
	}

	async call(config: any) {
		let response: AxiosResponse;

		try {
			response = await axios(config);

			return response;
		} catch (e) {
			const error = e.response || {};

			dispatchErrorHandler(error);

			throw new Error(e);
		}
	}
}

const request = new Request();

export default request;
