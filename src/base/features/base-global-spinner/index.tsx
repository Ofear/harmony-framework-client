import _ from 'lodash';
import { pendingTask, begin, end } from 'react-redux-spinner';
import store from '@base/features/base-store';
import * as spinnerConfig from 'configurations/spinner.config.json';

(open => {
	return (XMLHttpRequest.prototype.open = function(method: any, url: string) {
		this.addEventListener(
			'readystatechange',
			function() {
				const matchItem = _.filter(spinnerConfig.ignoreList, regx =>
					url.match(regx)
				);

				if (this.readyState === this.OPENED) {
					if (matchItem && matchItem.length) {
						store.dispatch({
							type: 'XHR_TASK_START',
							[pendingTask]: begin
						});
					}
				} else if (this.readyState === this.DONE) {
					if (matchItem && matchItem.length) {
						store.dispatch({
							type: 'XHR_TASK_END',
							[pendingTask]: end
						});
					}
				}
			},
			false
		);
		return open.call(this, method, url);
	});
})(XMLHttpRequest.prototype.open);
