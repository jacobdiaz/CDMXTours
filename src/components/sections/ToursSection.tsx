import TourCard from "../tours/TourCard";
import { Tours } from "@/utils/toursdata";
import { FormattedMessage, useIntl } from "react-intl";
import SectionTitle from "./SectionTitle";
import { useRouter } from "next/router";
import Link from "next/link";

const TourSection = ({ hideHeader = false }: { hideHeader?: boolean }) => {
  const Intl = useIntl();
  const { locale: locales } = useRouter();
  if (locales === undefined || locales === null || locales === "undefined")
    return null;

  const filteredTours = Tours.filter((tour) => tour.locales.includes(locales));

  return (
    <section>
      {!hideHeader && (
        <div className='flex flex-col justify-center md:items-center mt-10 mb-5'>
          <SectionTitle margin='m-0'>
            <FormattedMessage id='home.tours.title' />
          </SectionTitle>
        </div>
      )}
      {/* Row of english and espanol bottons */}
      <div className='flex flex-row justify-between mb-10'>
        <Link
          href='/book-a-tour'
          locale='en'
          className='w-[48%] p-5 bg-white text-black text-center border-2 border-black'
        >
          English
        </Link>
        <Link
          href='/book-a-tour/'
          locale='es'
          className='w-[48%] p-5 bg-black text-white  text-center'
        >
          Español
        </Link>
      </div>
      <div className='flex flex-col justify-center items-center w-full'>
        <ul className='flex flex-wrap justify-center md:justify-between w-full'>
          {filteredTours.map((t, idx) => (
            <li className='w-[95%] md:w-auto px-2' key={idx}>
              <TourCard {...t} key={t.id.toString()} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TourSection;
