import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { StyledSeparator,  } from './styles';
import {StyledTitle, StyledSubtitle, ModuleContainer } from '../generalModuleStyles';

import Wallet from 'app/components/Wallet';
import Exchange from 'app/components/Exchange';

const MoneyModule = () => {

    return (<ModuleContainer top={'40px'} right={'40px'}>
        <StyledTitle>MONEY</StyledTitle>
        <Row>
            <Col>
                <Wallet />
            </Col>
            <Col>
                <Exchange />
            </Col>
        </Row>
        <StyledSeparator />
        <Row>
            <Col sm={6}>
                <StyledSubtitle>Total receivables this month: $15000</StyledSubtitle>
            </Col>
            <Col sm={6}>
                <StyledSubtitle>Total receivables due: $10000</StyledSubtitle>
            </Col>
        </Row>
    </ModuleContainer>)
}

export default MoneyModule