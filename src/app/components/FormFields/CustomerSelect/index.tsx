import React from "react";
import useCustomers from "../../../hooks/useCustomers";
import BaseSelect from "../BaseSelect";
import { TCustomer } from "../../../types";

type TSelectProps = {
  name: string
  label: string
}


const CustomerSelect = ({ name, label }: TSelectProps) => {
  const { customers, error, loading } = useCustomers();

  if (error) {
    console.log("error in select", error);
  }

  const options = customers.map((customer: TCustomer, idx) => ({
    key: idx,
    value: customer.company,
  }));
  return <BaseSelect name={name} label={label} loading={loading} options={options} />;
};

export default CustomerSelect;