import React from 'react';
import { Card, Button,Col} from 'react-bootstrap';
import '../Service/ServiceInfo.css'
const ServiceInfo = () => {
    return (
        <Col md={3} className="mb-3">
           <Card className="card-hover">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary" className="btn-buy-view">View Details</Button>
                    <Button variant="success">Buy Now</Button>
                </Card.Body>
            </Card>
           </Col>
    );
};

export default ServiceInfo;