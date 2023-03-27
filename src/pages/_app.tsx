import { useRouter, NextRouter } from "next/router";
import { IntlProvider } from "react-intl";
import type { ComponentType } from "react";
import es from "../translations/es";
import en from "../translations/en";

import { Fjalla_One, Source_Sans_Pro } from "@next/font/google";

import "@/globals.css";
import NavBar from "@/components/NavBar";

interface MyAppProps {
  Component: ComponentType<any>;
  pageProps: any;
}

const SourceSansPro = Source_Sans_Pro({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-source-sans-pro",
});
const FjallaOne = Fjalla_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-fjalla",
});

interface Messages {
  [key: string]: Record<string, string>;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const { locale }: NextRouter = useRouter();
  const messages: Messages = { es, en };
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-fjalla: ${FjallaOne.style.fontFamily};
            --font-source-sans-pro: ${SourceSansPro.style.fontFamily};
          }
        `}
      </style>
      <IntlProvider locale={locale ?? "en"} messages={messages[locale ?? "en"]}>
        <NavBar />
        <Component {...pageProps} />
      </IntlProvider>
    </>
  );
}

export default MyApp;
