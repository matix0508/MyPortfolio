import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pane } from "evergreen-ui";
import { lighten } from "polished";
import styled from "styled-components";
import {
  shadow,
  transition,
  glow,
  colors,
  size,
  transitionTime,
} from "../../styles";

const { bg, primary, secondary, onSecondary } = colors;
const { big } = size;

export namespace ContactStyles {
  export const ContactStyled = styled(Pane)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    align-items: center;
    justify-content: center;
    @media only screen and (max-width: ${big}) {
      grid-template-columns: 1fr;
    }
  `;

  export const IconsContainer = styled.div`
    grid-column: 2;
    color: ${primary};
    font-size: 2rem;
    text-align: center;
    margin: 1rem;
    padding: 1rem;
    @media only screen and (max-width: ${big}) {
      grid-row: 2;
      grid-column: 1;
    }
  `;

  export const EmailContainer = styled.div`
    grid-column: 1;
    grid-row: 1;
    margin: 1rem;
    padding: 1rem;
    margin: auto;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    background-color: ${lighten(20, secondary)};
    color: ${onSecondary};
    ${shadow};
    ${transition};
    &:hover {
      ${glow}
    }
    @media only screen and (max-width: ${big}) {
      grid-row: 3;
    }
  `;
}
