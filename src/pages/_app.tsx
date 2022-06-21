import type { AppProps } from "next/app";
// import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
// import "primereact/resources/themes/saga-purple/theme.css";
import "primereact/resources/themes/lara-dark-blue/theme.css";
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import { RecoilRoot } from "recoil";
import AppLayout from "../layouts/app.layout";
import Head from "next/head";
import AuthProvider from "src/common/context/auth.context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>Jewells</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </AuthProvider>
    </RecoilRoot>
  );
}
export default MyApp;
