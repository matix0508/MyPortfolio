import type { AppProps } from "next/app";
import { Nav } from "../components/Navigation/Nav";
import styled from "styled-components";
import GlobalCSS from "../styles/global";

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalCSS />
      <Container>
        <Nav />

        <main>
          <Component {...pageProps} />
        </main>

        <footer>Mateusz Wlekliński 2022</footer>
      </Container>
    </>
  );
}

export default MyApp;
