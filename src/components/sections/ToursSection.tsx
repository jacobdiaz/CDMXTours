import TourCard from "../tours/TourCard";
import { Tours } from "@/utils/toursdata";
import { FormattedMessage, useIntl } from "react-intl";
import SectionTitle from "./SectionTitle";
import { useRouter } from "next/router";

const TourSection = ({ hideHeader = false }: { hideHeader?: boolean }) => {
  const Intl = useIntl();
  const { locale: locales } = useRouter();
  if (locales === undefined || locales === null || locales === "undefined")
    return null;

  const filteredTours = Tours.filter((tour) => tour.locales.includes(locales));

  return (
    <section>
      {!hideHeader && (
        <div className="flex flex-col justify-center md:items-center mt-10 mb-5">
          <SectionTitle margin="m-0">
            <FormattedMessage id="home.tours.title" />
          </SectionTitle>
        </div>
      )}
      <div className="flex flex-col justify-center items-center w-full">
        {!hideHeader && (
          <p className="text-lg mb-10">
            <FormattedMessage id="home.tours.description" />
          </p>
        )}
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
