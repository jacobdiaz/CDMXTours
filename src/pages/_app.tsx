import { useRouter, NextRouter } from "next/router";
import { IntlProvider } from "react-intl";
import type { ComponentType } from "react";
import es from "../lang/es.json";
import en from "../lang/en.json";

import "../styles/globals.css";

interface MyAppProps {
  Component: ComponentType<any>;
  pageProps: any;
}

interface Messages {
  [key: string]: Record<string, string>;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const { locale }: NextRouter = useRouter();
  const messages: Messages = { es, en };
  return (
    <IntlProvider locale={locale ?? "en"} messages={messages[locale ?? "en"]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
