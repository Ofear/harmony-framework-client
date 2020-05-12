import {config} from "config";
import Store from "@base/features/base-store";

const wsReconnectClient = require('ws-reconnect-js');
const guid = require('guid');

interface ISocket {
    start: Function,
    destroy: Function
}

class WSActions {
    socket: ISocket;
    store: any;
    url: any;

	constructor(store: any, url: any, options: any) {
		this.store = store;
		this.url = url;
		this.socket = new wsReconnectClient(url, options, {
			onMessageHandler: this.onMessage.bind(this)
		});

	}

	onMessage(msg: any, data: any) {
		try {
			const wsaToken = sessionStorage.getItem('wsa_token');
			const dispatchAction = JSON.parse(data);
			const me = (wsaToken && dispatchAction.token === sessionStorage.getItem('wsa_token'));

			if (dispatchAction.WS_ACTION && dispatchAction.action && !me) {
				this.store.dispatch(dispatchAction.action);
			}
		} catch (e) {
			if (process.env.NODE_ENV === 'development') {
				// eslint-disable-next-line no-console
				console.error('dispatchAction faild: ', e);
			}
		}
	}

	start() {
		sessionStorage.setItem('wsa_token', guid.create());
		this.socket.start();
	}

	stop() {
		sessionStorage.removeItem('wsa_token');
		this.socket.destroy();
	}


}

const wsAction = new WSActions(Store, config.ROOT_WS_URL, {
    retryCount: 3,
    reconnectInterval: 3,
});

if (config.USE_WS_ACTION) {
    wsAction.start();
}

export default wsAction;