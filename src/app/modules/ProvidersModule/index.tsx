import React from 'react';
import Box from 'app/components/Box';
import { Row, Col } from 'react-bootstrap';
import { StyledTitle, ModuleContainer } from '../generalModuleStyles';


const ProvidersModule = () => {
    return (<ModuleContainer left={'40px'} bottom={'40px'}>
        <StyledTitle>SERVICE PROVIDERS</StyledTitle>
        <Row>
            <Col sm={6}>
                <Box>{'Add / Remove Provider'}</Box>
            </Col>
            <Col sm={6}>
                <Box>{'Change Provider'}</Box>
            </Col>
        </Row>
        <Row>
            <Col sm={6}>
                <Box>{'Upload contracts'}</Box>
            </Col>
            <Col sm={6}>
                <Box>{'Sign contracts'}</Box>
            </Col>
        </Row>
    </ModuleContainer>)
}

export default ProvidersModule