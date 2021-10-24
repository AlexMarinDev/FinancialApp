import React from "react";
import BaseSelect from "../BaseSelect";
import useMyCompanies from "../../../hooks/useMyCompanies";
import { TMyCompanies } from "../../../types";

type TSelectProps = {
  name: string
  label: string
}


const MyCompaniesSelect = ({ name, label }: TSelectProps) => {
  const { myCompanies, error, loading } = useMyCompanies();

  if (error) {
    console.log("error in select", error);
  }

  const options = myCompanies.map((company: TMyCompanies, idx) => ({
    key: idx,
    value: company.name,
  }));
  return <BaseSelect name={name} label={label} loading={loading} options={options} />;
};

export default MyCompaniesSelect;