import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { makeServer } from "../mirage";
import Layout from "../components/layout";

makeServer({ environment: "development" });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
