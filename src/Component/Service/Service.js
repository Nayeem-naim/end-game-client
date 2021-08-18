import React from 'react';
import ServiceInfo from './ServiceInfo';
import { Row, Container } from 'react-bootstrap';
const Service = () => {

    return (

        <Container className="mt-5" >
            <h1 className="justify-contain-center mb-5">Service</h1>
            <Row>
                <ServiceInfo/>
                <ServiceInfo/>
                <ServiceInfo/>
                <ServiceInfo/>
                <ServiceInfo/>
                <ServiceInfo/>
                <ServiceInfo/>
            </Row>
        </Container>
    );
};

export default Service;