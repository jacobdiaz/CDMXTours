import TourCard from "../tours/TourCard";
import { Tours } from "@/utils/toursdata";
import { FormattedMessage } from "react-intl";
import SectionTitle from "./SectionTitle";

const TourSection = ({ hideHeader = false }: { hideHeader?: boolean }) => (
  <section>
    {!hideHeader && (
      <div className='flex flex-col justify-center md:items-center mt-10 mb-5'>
        <SectionTitle margin='m-0'>
          <FormattedMessage id='home.tours.title' />
        </SectionTitle>
      </div>
    )}
    <div className='flex flex-col justify-center items-center w-full'>
      {!hideHeader && (
        <p className='text-lg mb-10'>
          <FormattedMessage id='home.tours.description' />
        </p>
      )}
      <ul className='flex flex-wrap justify-center md:justify-between w-full'>
        {Tours.map((t) => (
          <TourCard {...t} key={t.id.toString()} />
        ))}
      </ul>
    </div>
  </section>
);

export default TourSection;
