import styled from 'styled-components';
import theme from 'app/theme';

type TBorderMeasurements = {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
}

const ModuleContainer = styled.div`
    padding: 50px 50px;
    &:before {
        content : "";
        position: absolute;
        left: ${(props: TBorderMeasurements) => props.left || 'unset'};
        bottom: ${(props: TBorderMeasurements) => props.bottom || 'unset'};
        right    : ${(props: TBorderMeasurements) => props.right || 'unset'};
        top  : ${(props: TBorderMeasurements) => props.top || 'unset'};
        height  : 1px;
        width   : 80%;  /* or 100px */
        border-bottom:1px solid ${theme.colors.black};
      }
    &:after {
    content : "";
    position: absolute;
    left: ${(props: TBorderMeasurements) => props.left || 'unset'};
    bottom: ${(props: TBorderMeasurements) => props.bottom || 'unset'};
    right    : ${(props: TBorderMeasurements) => props.right || 'unset'};
    top  : ${(props: TBorderMeasurements) => props.top || 'unset'};
    height  : 80%;
    width   : 1px;  /* or 100px */
    border-right: 1px solid ${theme.colors.black};
    }
`

const StyledSubtitle = styled.div`
    margin-bottom: 20px;
`

const StyledTitle = styled.div`
    margin-bottom: 20px;
`
export { StyledTitle, StyledSubtitle, ModuleContainer }