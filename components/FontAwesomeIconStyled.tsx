import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { transition, colors } from "../styles";

const { primary, secondary } = colors;

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 1rem;
  ${transition};

  &:hover {
    background-color: ${primary};
    color: ${secondary};
    font-size: 2.5rem;
  }
`;
