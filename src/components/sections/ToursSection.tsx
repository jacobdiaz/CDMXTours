import TourCard from "../tours/TourCard";
import { Tours } from "@/utils/toursdata";
import { FormattedMessage, useIntl } from "react-intl";
import SectionTitle from "./SectionTitle";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

// This is used on the Home page to display the list of tours available

const TourSection = ({ hideHeader = false }: { hideHeader?: boolean }) => {
  const Intl = useIntl();
  const { locale } = useRouter();

  const filteredTours = Tours.filter((tour) => tour.locales.includes(locale ?? ""));

  const lang = Intl.locale === "en" ? "en" : "es";
  const [langBtnStyle, setLangBtnStyle] = useState({
    en: "",
    es: "",
  });
  useEffect(() => {
    setLangBtnStyle({
      en:
        lang === "en"
          ? "w-[48%] p-5 bg-black text-white text-center"
          : "w-[48%] p-5 bg-white text-black text-center border-2 border-black",
      es:
        lang === "es"
          ? "w-[48%] p-5 bg-black text-white text-center"
          : "w-[48%] p-5 bg-white text-black text-center border-2 border-black",
    });
  }, [lang]);
  return (
    <section>
      {!hideHeader && (
        <div className="flex flex-col justify-center md:items-center mt-10 mb-5">
          <SectionTitle margin="m-0">
            <FormattedMessage id="home.tours.title" />
          </SectionTitle>
        </div>
      )}
      {/* Row of english and espanol bottons */}
      <div className="flex flex-row justify-between mb-10">
        <Link href="/book-a-tour" locale="en" className={`${langBtnStyle.en}`}>
          English
        </Link>
        <Link href="/book-a-tour/" locale="es" className={`${langBtnStyle.es}`}>
          Español
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <ul className="flex flex-wrap justify-center md:justify-between w-full">
          {filteredTours.map((t, idx) => (
            <li className="w-[95%] md:w-auto px-2" key={idx}>
              <TourCard {...t} key={t.id.toString()} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TourSection;
