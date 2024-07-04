import TourCard from "../tours/TourCard";
import { Tours } from "@/utils/toursdata";
import { FormattedMessage, useIntl } from "react-intl";
import SectionTitle from "./SectionTitle";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import CTALink from "../actions/CTALink";

// This is used on the Home page to display the list of tours available

const TourSection = ({
  hideHeader = false,
  showRental = false,
  tourType,
}: {
  hideHeader?: boolean;
  tourType?: "Walking" | "Bike";
  showRental?: boolean;
}) => {
  const Intl = useIntl();
  const { locale } = useRouter();

  const localeFilteredTours = Tours.filter((tour) =>
    tour.locales.includes(locale ?? "")
  );
  const filteredTours = tourType
    ? localeFilteredTours.filter((tour) => tour.tourType === tourType)
    : localeFilteredTours;

  const lang = Intl.locale === "en" ? "en" : "es";
  const [langBtnStyle, setLangBtnStyle] = useState({
    en: "",
    es: "",
  });

  const router = useRouter();
  const currentPath = router.asPath;

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

  const TourRentalCard = () => {
    return (
      <li className="mb-10 flex flex-col justify-between h-fit w-full">
        <article className="h-full flex flex-col justify-between">
          <div>
            <Link href="/cdmx-bike-rentals">
              <Image
                src="https://d252kj1i9nz0td.cloudfront.net/small_card_thumbnails/en/card_bike_rental.png"
                alt="Bike Rentals in Mexico City"
                className="w-full h-full object-cover cursor-pointer hover:transform hover:scale-[101%] transition-transform duration-300"
                height={500}
                width={500}
                loading="lazy"
              />
            </Link>
            <p className="my-5 text-center">
            <FormattedMessage
              id="rental.description"
            />
          </p>
          </div>
          <div className="flex flex-col justify-center ">
          <Link
            href={`/cdmx-bike-rentals`}
            className="font-bold text-lg hover:font-black text-center"
          >
            {/* Book Now */}
            <FormattedMessage id="tours.cta.button" />
          </Link>
        </div>
        </article>
      </li>
    );
  }

  return (
    <section>
      {!hideHeader && (
        <div className="flex flex-col justify-center items-center md:items-center mt-10 mb-5">
          <SectionTitle margin="m-0">
            <FormattedMessage id="home.tours.title" />
          </SectionTitle>
        </div>
      )}
      {/* Row of english and espanol bottons */}
      <div className="flex flex-row justify-between mb-10">
        <Link href={currentPath} locale="en" className={`${langBtnStyle.en}`}>
          English
        </Link>
        <Link href={currentPath} locale="es" className={`${langBtnStyle.es}`}>
          Español
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {filteredTours.map((t, idx) => (
            <li className="w-full" key={idx}>
              <TourCard {...t} key={t.id.toString()} />
            </li>
          ))}
          {
            showRental && <TourRentalCard />
          }
        </ul>
      </div>
    </section>
  );
};

export default TourSection;
