import styled from "styled-components";

export namespace CardElements {
  export const Container = styled.div`
    justify-self: center;
    margin: 1.5rem;
    background-color: $bg;
    border-radius: 2rem;
    overflow-y: hidden;
    height: auto;
    width: 60%;
    color: $onPrimary;
    @include shadow;
    transition: all 0.2s ease-in-out;

    &:hover {
      @include glow;
    }

    @media only screen and (max-width: 1400px) {
      width: 80%;
    }
  `;

  export const Header = styled.div`
    background-color: $primary;
    padding: 0.5rem;
    font-weight: bold;
    text-align: center;
  `;

  export const Body = styled.div`
    margin: 1rem;
    padding: 0.5rem;
    text-align: justify;
    @include transition;
    h4 {
      text-align: center;
    }
  `;
}
