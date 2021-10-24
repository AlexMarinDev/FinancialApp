import React from "react";
import { useField } from "formik";

type TSelectProps = {
  name: string;
  label: string;
  options: any[];
  loading: boolean;
}

const BaseSelect = ({ label, options, loading, ...props }: TSelectProps) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label>
        {label}
        <select {...field} {...props}>
          {loading && <option value="loading">Loading</option>}
          {<option value="-1">Choose..</option>}
          {options.map((option: any, idx: number) => <option value={`${option.value}`}
                                                             key={idx}>{option.value}</option>)}
        </select>
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default BaseSelect;
