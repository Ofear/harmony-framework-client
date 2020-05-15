/**
 * Here you add all the apis urls defenition
 */

import request from '@base/features/base-api';
import { config } from 'config';

export const createApi = (baseURL = config.ROOT_SERVER_URL) => {
	return {
		getDevices: () => {
			return request.call({
				baseURL,
				method: 'get',
				url: '/devices'
			});
		}
	};
};

export default createApi();
