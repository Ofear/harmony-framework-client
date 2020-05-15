import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withLocalize } from 'react-localize-redux';
import { reduxForm } from 'redux-form';

export function baseConnect(component: any, mapStateToProps: any, propsToDispatch: any) {
	return withRouter(connect(mapStateToProps, propsToDispatch)(withLocalize(component)));
}

export function baseConnectForm(component: any, mapStateToProps: any, propsToDispatch: any, formConfig: any) {
	return connectWithReduxForm(baseConnect(component, mapStateToProps, propsToDispatch), formConfig);
}

function connectWithReduxForm(component: any, reduxFormConfig: any) {
	const defaultValidateFunction = () => {
		return undefined;
	};

	reduxFormConfig.validate = component.prototype.validate || defaultValidateFunction;

	return reduxForm(reduxFormConfig)(component);
}
