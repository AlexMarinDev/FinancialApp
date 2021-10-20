import React from 'react';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'react-bootstrap';
import Icon from 'app/components/Icon';

import { StyledSeparator } from './styles';
import { StyledTitle, ModuleContainer } from '../generalModuleStyles';

import './styles.css';




const InvoicesModule = () => {

    const handleInvoiceDueClick = () => {
        alert('invoice due')
    }
    return (<ModuleContainer right={'40px'} bottom={'40px'}>
        <Row>
            <Col sm={6}>
                <StyledTitle>Invoicing OUT</StyledTitle>

                <Icon {...{ icon: faFileInvoice, size: 'lg', label: 'Due', description: "invoices-due", onClickHandler: handleInvoiceDueClick }} />

                <Icon {...{ icon: faFileInvoice, size: 'lg', label: 'Exceeded', description: "invoices-exceeded", onClickHandler: handleInvoiceDueClick }} />

                <Icon {...{ icon: faFileInvoice, size: 'lg', label: 'Paid', description: "invoices-paid", onClickHandler: handleInvoiceDueClick }} />

            </Col>
            <Col sm={6}>
                <StyledTitle>Invoicing IN</StyledTitle>
                <Icon {...{ icon: faFileInvoice, size: 'lg', label: 'Received', description: "invoices-received", onClickHandler: handleInvoiceDueClick }} />
                <Icon {...{ icon: faFileInvoice, size: 'lg', label: 'To Receive', description: "invoices-to-receive", onClickHandler: handleInvoiceDueClick }} />

            </Col>
        </Row>
        <StyledSeparator>Others</StyledSeparator>
        <Row>
            <Col>
                <Icon {...{ icon: faFileInvoice, size: 'lg', label: 'Closed', description: "invoices-closed", onClickHandler: handleInvoiceDueClick }} />
            </Col>
            <Col>
                <Icon {...{ icon: faFileInvoice, size: 'lg', label: 'Upload Invoices', description: "invoices-upload", onClickHandler: handleInvoiceDueClick }} />
            </Col>
        </Row>
    </ModuleContainer>)
}

export default InvoicesModule