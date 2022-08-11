import { Pane } from "evergreen-ui";
import styled from "styled-components";
import { shadow, transition } from "../../styles";
import { colors } from "../../styles";

const { onBg } = colors;

export namespace PhotoElements {
  export const Container = styled(Pane)`
    grid-column: 2;
    grid-row: 1 / span 2;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: $big) {
      grid-column: 1;
      grid-row: 1;
    }
  `;

  export const PhotoContainer = styled(Pane)`
    margin: 1rem;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    ${shadow}
    ${transition};
    justify-self: center;

    @media only screen and (min-width: $small) {
      width: 400px;
      height: 400px;

      &:hover {
        width: 450px;
        height: 450px;
      }
    }

    @media only screen and (max-width: $small) and (min-width: 0) {
      width: 300px;
      height: 300px;

      &:hover {
        width: 300px;
        height: 300px;
      }
    }
  `;

  export const Name = styled(Pane)`
    text-align: center;
    color: ${onBg};
  `;
}
