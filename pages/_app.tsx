import type { AppContext, AppProps } from "next/app";
import { Nav, NavProps } from "../components/Navigation/Nav";
import styled from "styled-components";
import GlobalCSS from "../styles/global";
import { INavItem } from "../components/Navigation/NavItem";

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const MyApp = ({ Component, pageProps, navItems }: AppProps & NavProps) => {
  return (
    <>
      <GlobalCSS />
      <Container>
        <Nav navItems={navItems} />

        <main>
          <Component {...pageProps} />
        </main>

        <footer>Mateusz Wlekliński 2022</footer>
      </Container>
    </>
  );
};

MyApp.getInitialProps = (appContext: AppContext) => {
  const appProps = appContext.Component.getInitialProps
    ? appContext.Component.getInitialProps(appContext.ctx)
    : {};

  const navItems: INavItem[] = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Career",
      to: "/career",
    },
    {
      name: "My Projects",
      to: "/projects",
    },
    {
      name: "Find Me",
      to: "/contact",
    },
  ];
  return { ...appProps, navItems };
};

export default MyApp;
