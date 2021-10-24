import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Formik } from "formik";
import Form from "app/components/Form";
import { StyledButtonsWrapper } from "./styles";
import FormFields from "../../components/FormFields";

const NewInvoice = (props: RouteComponentProps) => {

  const initialValues: any = {
    billTo: "",
    billFrom: "",
    invoiceItems: [{
      product: "",
      quantity: "",
      price: "",
    }],
  };

  return <Formik
    initialValues={initialValues}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }, 1000);
    }}
  >
    {props => (
      <Form>
        <FormFields values={props.values} />
        <StyledButtonsWrapper>
          <button type="button" onClick={() => {
            props.handleReset();
          }}>Discard
          </button>
          <button type="submit">Save</button>
        </StyledButtonsWrapper>
      </Form>
    )}
  </Formik>;
};

export default NewInvoice;
