import { useRouter, NextRouter } from "next/router";
import { IntlProvider } from "react-intl";
import type { ComponentType } from "react";
import es from "../translations/es";
import en from "../translations/en";

import { Fjalla_One, Source_Sans_Pro, League_Spartan } from "next/font/google";

import "@/globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import DatePicker from "@/components/tours/DatePicker";
import DatePickerStyle from "@/components/tours/DatePickerStyle";

interface MyAppProps {
  Component: ComponentType<any>;
  pageProps: any;
}

const SourceSansPro = Source_Sans_Pro({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-source-sans-pro",
});

const LeagueSpartan = League_Spartan({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-league-spartan",
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
      <DatePickerStyle FjallaOne={FjallaOne} SourceSansPro={SourceSansPro} />
      <IntlProvider locale={locale ?? "en"} messages={messages[locale ?? "en"]}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </IntlProvider>
    </>
  );
}

export default MyApp;
