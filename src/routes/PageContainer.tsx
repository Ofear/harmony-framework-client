import * as React from 'react';
import { Route } from 'react-router-dom';
import { baseConnect } from '@base/features/base-redux-react-connect';

interface IProps {
    componentToRender: any;
    propsToRender: any;
}

class PageContainer extends React.Component<IProps> {
    render() {
        const { componentToRender: ComponentToRender, propsToRender } =  this.props;

        return <ComponentToRender {...propsToRender} />;
    }
}

const ConnectedPageContainer: any = baseConnect(PageContainer,
    (/* state */) => {
        return {};
    },
    {

    }
);

const CustomRoute = ({ component, ...rest }: any) => {
    return (
        <Route
            {...rest}
            render={props => {
                // @ts-ignore
                return (
                    <ConnectedPageContainer
                        componentToRender={component}
                        propsToRender={props}
                    />
                );
            }}
        />
    );
};

export default CustomRoute;
