import { createGlobalStyle } from "styled-components";
import { shadow } from "./general";
import { colors } from "./colors";
const { bg, onBg } = colors;

export default createGlobalStyle`
html,
body {
  background-color: ${colors.bg};
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: $bg;
    width: 100vw;
    overflow-x:hidden;
}



main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  overflow-x:hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

#__next {
  height: 100vh;
}


footer {
  height: fit-content;
  width: 100vw;
  bottom: 0;
  margin-top: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  text-align: center;
  background-color: ${bg};
  color: ${onBg};
  ${shadow};

}

@media only screen and (max-width: $big) {
  footer {
    position:inherit;
    margin-top: 0;
    padding-bottom: 1rem;
  }
}
`;
