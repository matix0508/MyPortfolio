import styled from "styled-components";
import { colors, glow, shadow, transition } from "../../../styles";

const { bg, onBg, primary, onPrimary } = colors;

export namespace CardElements {
  export const Container = styled.div`
    justify-self: center;
    margin: 1.5rem;
    background-color: ${bg};
    border-radius: 2rem;
    overflow-y: hidden;
    height: fit-content;
    width: 60%;
    color: ${onBg};
    ${shadow};
    transition: all 0.2s ease-in-out;

    &:hover {
      ${glow};
    }

    @media only screen and (max-width: 1400px) {
      width: 80%;
    }
  `;

  export const Header = styled.div`
    background-color: ${primary};
    color: ${onPrimary};
    padding: 0.5rem;
    font-weight: bold;
    text-align: center;
  `;

  export const Body = styled.div`
    margin: 1rem;
    padding: 0.5rem;
    text-align: justify;
    ${transition};
    h4 {
      text-align: center;
    }
  `;
}
