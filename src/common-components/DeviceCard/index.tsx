import * as React from 'react';
import { LocalizedElement, LocalizedElementMap } from 'react-localize-redux';
import { Button, Card, Col } from 'react-bootstrap';
import { Device } from 'actions/redux/catalog/interfaces';
import './style.scss';

interface Props {
	device: Device;
	buttonTitle: LocalizedElementMap | LocalizedElement;
	priceTitle: LocalizedElementMap | LocalizedElement;
	onBuyClick: (device: Device) => void;
}

const DeviceCard: React.FC<Props> = (props: Props) => {
	const {
		device, buttonTitle, priceTitle, onBuyClick
	} = props;

	return (
		<Col key={device.id} xs={6} md={4} className="device-card-col">
			<Card className="device-card">
				<Card.Body>
					<Card.Img variant="top" src={device.image} className="device-card-img" />
					<Card.Text />
					<Card.Title>{device.name}</Card.Title>
					<Card.Text>{device.description}</Card.Text>
					<Card.Text />
					<Card.Text>
						{priceTitle}
						:
						<b>{device.price}</b>
					</Card.Text>
					<Button
						onClick={() => {
							onBuyClick(device);
						}}
						variant="primary"
					>
						{buttonTitle}
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default DeviceCard;
