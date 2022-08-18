import { Card } from "evergreen-ui";
import styled from "styled-components";
import { marginSize, paddingSize } from "../../styles";

export const CardStyled = styled(Card)`
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
