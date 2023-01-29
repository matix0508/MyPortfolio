import { Card } from "evergreen-ui";
import { lighten, darken } from "polished";
import styled from "styled-components";
import { colors, marginSize, paddingSize } from "../../styles";

export const CardStyled = styled(Card)`
  background-color: ${colors.primary};
  justify-content: center;
  margin: ${marginSize.regular};
  padding: ${paddingSize.regular};
  text-align: center;

  svg {
    color: ${colors.onPrimary};
  }

  h4 {
    padding: ${paddingSize.small};
    font-weight: bold;
    text-align: center;
    color: ${colors.onPrimary};
  }

  p {
    margin: ${marginSize.regular};
    padding: ${paddingSize.small};
    text-align: center;
    color: ${colors.onPrimary};
  }
`;
