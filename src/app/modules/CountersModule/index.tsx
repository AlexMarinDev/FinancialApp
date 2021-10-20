import React from 'react';
import Box from 'app/components/Box';
import { Row, Col } from 'react-bootstrap';
import { StyledTitle, ModuleContainer } from '../generalModuleStyles';


const CountersModule = () => {
    return (<ModuleContainer top={'40px'} left={'40px'}>
        <StyledTitle>COUNTERS</StyledTitle>
        <Row>
            <Col sm={6}>
                <Box>{'Days until Annual Financial Reports: 200'}</Box>
            </Col>
            <Col sm={6}>
                <Box>{'Expiring contracts: 2'}</Box>
            </Col>
        </Row>
        <Row>
            <Col sm={6}>
                <Box>{'Total invoices this month: 10'}</Box>
            </Col>
            <Col sm={6}>
                <Box>{'Total invoices this year: 100'}</Box>
            </Col>
        </Row>
    </ModuleContainer>)
}

export default CountersModule