import * as React from 'react';
import { TranslateFunction } from 'react-localize-redux';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { Container, Row, CardDeck } from 'react-bootstrap';
import { ApplicationState } from 'actions/redux';
import CatalogActions, { catalogSelector } from 'actions/redux/catalog';
import { Device } from 'actions/redux/catalog/interfaces';
import DeviceCard from 'common-components/DeviceCard';

interface Props {
	getDeviceList: () => void;
	deviceList: Device[];
	translate: TranslateFunction;
}

class DeviceGallery extends React.Component<Props> {
	componentDidMount() {
		const { getDeviceList } = this.props;

		getDeviceList();
	}

	render() {
		const { deviceList, translate } = this.props;

		if (!deviceList || !deviceList.length) {
			return null;
		}

		return (
			<Container>
				<Row>
					<h1>{translate('deviceGallery.pageTitle')}</h1>
				</Row>
				<br />
				<Row>
					<CardDeck>
						{deviceList.map((device: Device) => (
							<DeviceCard
								key={device.id}
								device={device}
								buttonTitle={translate('deviceGallery.addToCartButton')}
								priceTitle={translate('deviceGallery.priceTitle')}
								onBuyClick={(item: any) => {
									// eslint-disable-next-line no-console
									console.log('buy item', item);
								}}
							/>
						))}
					</CardDeck>
				</Row>
			</Container>
		);
	}
}

export default baseConnect(
	DeviceGallery,
	(state: ApplicationState) => ({
		deviceList: catalogSelector.devices(state)
	}),
	{
		getDeviceList: CatalogActions.getDeviceList
	}
);
