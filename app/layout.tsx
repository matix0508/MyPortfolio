"use client";
import { Container, Nav } from "../components/Navigation/Nav";
import { INavItem } from "../components/Navigation/NavItem";
import StyledComponentsRegistry from "../lib/registry";
import GlobalCSS from "../styles/global";

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
    name: "Skills",
    to: "/skills",
  },
  {
    name: "Find Me",
    to: "/contact",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <>
            <GlobalCSS />
            <Nav navItems={navItems} />
            <Container>{children}</Container>
          </>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
