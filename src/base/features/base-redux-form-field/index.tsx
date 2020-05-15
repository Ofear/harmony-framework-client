import * as React from 'react';
import { Field } from 'redux-form';

interface IProps {
	input: any;
}

export function createField(component, requiredProps) {
	class CreateField extends React.Component<IProps> {
		static propTypes: any;

		render() {
			const input = this.props;

			return <Field component={component} {...this.props} {...input} />;
		}
	}

	CreateField.propTypes = requiredProps;

	return CreateField;
}
