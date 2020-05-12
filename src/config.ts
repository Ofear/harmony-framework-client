interface IConfig {
    ROOT_SERVER_URL?: string;
    ROOT_WS_URL?: string;
    USE_WS_ACTION?: boolean;
    appName?: string
}

function initConfig() {

	let config: IConfig = {};
	
	if (process.env.NODE_ENV === 'development') {

		/* ---------- Config Development --------- */
		config = {
            USE_WS_ACTION: false,
			ROOT_SERVER_URL: 'http://localhost:5555/',
			ROOT_WS_URL: 'ws://localhost:3030'
		};

	} else if (process.env.NODE_ENV === 'production') {

		/* ---------- Config Production --------- */
		config = {
            USE_WS_ACTION: false,
            ROOT_SERVER_URL: 'http://localhost:5555/',
			ROOT_WS_URL: 'ws://localhost:3030'
		};

	}

	return config;

}

export const config = initConfig();

