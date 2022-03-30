import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Nav } from "../components/Navigation/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Nav />

      <main className="main">
        <Component {...pageProps} />
      </main>

      <footer className="footer">Mateusz Wlekliński 2022</footer>
    </div>
  );
}

export default MyApp;
