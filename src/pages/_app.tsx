import { useRouter, NextRouter } from "next/router";
import { IntlProvider } from "react-intl";
import type { ComponentType } from "react";
import es from "../translations/es";
import en from "../translations/en";

import "../globals.css";

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
