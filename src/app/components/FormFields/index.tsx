import React from "react";
import { StyledFieldsWrapper } from "./styles";
import CustomerSelect from "./CustomerSelect";
import MyCompaniesSelect from "./MyCompaniesSelect";
import { Field, FieldArray } from "formik";

const FormFields = ({ values }: any) => {
  return <StyledFieldsWrapper>
    <CustomerSelect name={"billTo"} label={"Bill To: "} />
    <MyCompaniesSelect name={"billFrom"} label={"Bill From: "} />
    <FieldArray
      name="invoiceItems"
      render={arrayHelpers => (
        <div>
          {values.invoiceItems && values.invoiceItems.length > 0 ? (
            values.invoiceItems.map(({ product, quantity, price }: any, index: number) => (
              <div key={index} style={{ display: "flex", flex: 1 }}>
                <div>
                  <label style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    {"item"}
                    <Field name={`invoiceItems.${index}.product`} style={{ marginRight: "30px" }} />
                  </label>
                  <label style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    {"quantity"}
                    <Field name={`invoiceItems.${index}.quantity`} style={{ marginRight: "30px" }} />
                  </label>
                  <label style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    {"price"}
                    <Field name={`invoiceItems.${index}.price`} style={{ marginRight: "30px" }} />
                  </label>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      console.log("arrayHelpers", arrayHelpers);
                      arrayHelpers.remove(index);
                    }}
                  >
                    -
                  </button>
                  <button
                    type="button"
                    onClick={() => arrayHelpers.insert(index, "")}
                  >
                    +
                  </button>
                </div>


              </div>
            ))
          ) : (
            <button type="button" onClick={() => arrayHelpers.push("")}>
              Add Invoice Item
            </button>
          )}

        </div>
      )}
    />
  </StyledFieldsWrapper>;
};

export default FormFields;