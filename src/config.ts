interface IConfig {
	ROOT_SERVER_URL?: string;
	ROOT_WS_URL?: string;
	USE_WS_ACTION?: boolean;
	appName?: string;
}

const initConfig = (): IConfig => {
	let appConfig: IConfig = {};

	if (process.env.NODE_ENV === 'development') {
		/* ---------- Config Development --------- */
		appConfig = {
			USE_WS_ACTION: false,
			ROOT_SERVER_URL: 'http://localhost:5555/',
			ROOT_WS_URL: 'ws://localhost:3030'
		};
	} else if (process.env.NODE_ENV === 'production') {
		/* ---------- Config Production --------- */
		appConfig = {
			USE_WS_ACTION: false,
			ROOT_SERVER_URL: 'http://localhost:5555/',
			ROOT_WS_URL: 'ws://localhost:3030'
		};
	}

	return appConfig;
}

export const config = initConfig();
