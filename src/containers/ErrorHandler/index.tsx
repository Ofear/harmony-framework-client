import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Modal, Button } from 'react-bootstrap';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { clearErrorHandler, ErrorHandlerRequest, BaseComponentTypes } from '@base/features/base-error-handler';
import { ApplicationState } from 'actions/redux';
import { RoutesPath } from 'routes';

interface Props {
	errorHandler: ErrorHandlerRequest<any>;
	history: any;
}

/** *** Define Possibles Component Types **** */
export enum ComponentTypes {
	MODAL = 'modal'
}

class ErrorHandler extends React.Component<Props> {
	readonly appElement: HTMLElement | null;

	constructor(props: Props) {
		super(props);

		this.appElement = document.getElementById('app');
	}

	componentDidUpdate() {
		const { errorHandler, history } = this.props;
		const { component } = errorHandler || {};

		if (component === BaseComponentTypes.ERROR_PAGE) {
			clearErrorHandler();
			history.push(RoutesPath.ERROR_PAGE);
		}
	}

	render() {
		const { errorHandler } = this.props;
		const { component, payload } = errorHandler;

		if (!Object.keys(errorHandler).length || component === BaseComponentTypes.IGNORE) {
			return null;
		}

		/** *** Render th Corresponding Component According to Component value **** */
		switch (component.toLowerCase()) {
			case ComponentTypes.MODAL: {
			/** *** Here you can return your modal for display with any props you sent in payload **** */
				return ReactDOM.createPortal(this.renderModal(payload), this.appElement as Element);
			}
			default: {
				return null;
			}
		}
	}

	renderModal(payload: any) {
		return (
			<Modal.Dialog>
				<Modal.Header
					closeButton
					onClick={() => {
						clearErrorHandler();
					}}
				>
					<Modal.Title>{payload.header}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>{payload.body}</p>
				</Modal.Body>

				<Modal.Footer>
					<Button
						variant="primary"
						onClick={() => {
							clearErrorHandler();
						}}
					>
						Close
					</Button>
				</Modal.Footer>
			</Modal.Dialog>
		);
	}
}

export default baseConnect(
	ErrorHandler,
	(state: ApplicationState) => ({
		errorHandler: state.errorHandler
	}),
	{}
);
