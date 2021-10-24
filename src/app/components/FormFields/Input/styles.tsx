import styled from "styled-components";
import theme from "../../../theme";

type TFieldProps = {
  valid: boolean;
}

const StyledInput = styled.input`
  border: 1px solid ${({ valid }: TFieldProps) => valid ? theme.colors.black : theme.colors.red};
`;

const StyledLabel = styled.label`
  color: ${({ valid }: TFieldProps) => valid ? theme.colors.black : theme.colors.red};
`;

export {
  StyledInput,
  StyledLabel,
};