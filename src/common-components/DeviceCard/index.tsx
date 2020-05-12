import * as React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { IDevice } from 'actions/redux/catalog/interfaces';
import './style.scss';

interface IProps {
    device: IDevice;
    buttonTitle: string;
    priceTitle: string;
    onBuyClick: Function;
}

export default class DeviceCard extends React.Component<IProps> {
    render() {
        const { device, buttonTitle, priceTitle, onBuyClick } = this.props;

        return (
            <Col key={device.id} xs={6} md={4} className="device-card-col">
                <Card className="device-card">
                    <Card.Body>
                        <Card.Img variant="top" src={device.image} className="device-card-img" />
                        <Card.Text />
                        <Card.Title>{device.name}</Card.Title>
                        <Card.Text>
                            {device.description}
                        </Card.Text>
                        <Card.Text />
                        <Card.Text>
                            {priceTitle}: <b>{device.price}</b>
                        </Card.Text>
                        <Button onClick={() => { onBuyClick(device); }} variant="primary">{buttonTitle}</Button>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}
