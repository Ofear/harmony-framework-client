import * as React from 'react';
import {baseConnect} from '@base/features/base-redux-react-connect';
import { Container, Row, CardDeck } from 'react-bootstrap';
import { IApplicationState } from 'actions/redux';
import CatalogActions, { catalogSelector } from 'actions/redux/catalog';
import { IDevice } from 'actions/redux/catalog/interfaces';
import DeviceCard from 'common-components/DeviceCard';

interface IProps {
    getDeviceList: Function;
    deviceList: IDevice[];
    translate: Function;
}

class DeviceGallery extends React.Component<IProps> {
    componentDidMount() {
        this.props.getDeviceList();
    }

    render() {
        const { deviceList, translate } = this.props;

        if (!deviceList || !deviceList.length) {
            return null;
        }

		return (
			<Container>
				<Row>
                    <CardDeck>
                        {deviceList.map((device: IDevice) =>
                            <DeviceCard
                                key={device.id}
                                device={device}
                                buttonTitle={translate('deviceGallery.addToCartButton')}
                                priceTitle={translate('deviceGallery.priceTitle')}
                                onBuyClick={(item: any) => { console.log('buy item', item); }}
                            />)
                        }
                    </CardDeck>
				</Row>
			</Container>
		);
	}
}

export default baseConnect(DeviceGallery,
    (state: IApplicationState) => {
        return {
            deviceList: catalogSelector.devices(state)
        };
    },
    {
        getDeviceList: CatalogActions.getDeviceList
    }
);
