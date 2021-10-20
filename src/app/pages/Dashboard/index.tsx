import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import DocumentsModule from '../../modules/DocumentsModule';
import CountersModule from '../../modules/CountersModule';
import MoneyModule from '../../modules/MoneyModule';
import InvoicesModule from '../../modules/InvoicesModule';
import ProvidersModule from '../../modules/ProvidersModule';
import { StyledButtonWrapper } from './styles'

const Dashboard = () => {

    return (<Container>
        <Row>
            <Col sm={6}>
                <InvoicesModule />
            </Col>
            <Col sm={6}>
                <ProvidersModule />
            </Col>
        </Row>
        <StyledButtonWrapper>
            <Row>
                <Col>

                    <Button variant="outline-success">CREATE NEW INVOICE</Button>
                </Col>
                <Col>
                    <Button variant="outline-warning">PAY INVOICE</Button>
                </Col>
                <Col>
                    <Button variant="outline-primary">FIND INVOICE</Button>
                </Col>
            </Row>
        </StyledButtonWrapper>

        <Row>
            <Col sm={6}>
                <MoneyModule />
            </Col>
            <Col sm={6}>
                <CountersModule />
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <DocumentsModule />
            </Col>
        </Row>
    </Container>)
}

export default Dashboard