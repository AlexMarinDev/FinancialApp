import React from "react";
import { StyledForm } from "./styles";

type TFormProps = {
  children?: React.ReactNode
}

const Form = ({ children }: TFormProps) => {
  return <StyledForm>
    {children}
  </StyledForm>;
};

export default Form;