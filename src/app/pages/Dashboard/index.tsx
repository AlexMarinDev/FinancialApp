import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import DocumentsModule from "../../modules/DocumentsModule";
import CountersModule from "../../modules/CountersModule";
import MoneyModule from "../../modules/MoneyModule";
import InvoicesModule from "../../modules/InvoicesModule";
import ProvidersModule from "../../modules/ProvidersModule";
import { StyledButtonWrapper } from "./styles";
import { Link, RouteComponentProps } from "@reach/router";

const Dashboard = (props: RouteComponentProps) => {

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
          <Link to="new">CREATE NEW INVOICE</Link>
        </Col>
        <Col>
          <Button variant="outline-warning">PAY INVOICE</Button>
        </Col>
        <Col>
          <Link to={"invoices"}>FIND INVOICE</Link>
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
  </Container>);
};

export default Dashboard;