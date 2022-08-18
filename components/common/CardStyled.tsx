import { Card } from "evergreen-ui";
import { lighten, darken } from "polished";
import styled from "styled-components";
import { colors, marginSize, paddingSize } from "../../styles";

export const CardStyled = styled(Card)`
  background-color: ${lighten(0.5, colors.primary)};
  color: ${darken(0.5, colors.onPrimary)};
  justify-content: center;
  margin: ${marginSize.regular};
  padding: ${paddingSize.regular};
  text-align: center;

  h4 {
    padding: ${paddingSize.small};
    font-weight: bold;
    text-align: center;
  }

  p {
    margin: ${marginSize.regular};
    padding: ${paddingSize.small};
    text-align: center;
  }
`;
