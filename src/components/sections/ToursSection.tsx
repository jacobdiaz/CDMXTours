import TourCard from "../tours/TourCard";
import { tours } from "@/utils/toursdata";
import { FormattedMessage } from "react-intl";
import SectionTitle from "./SectionTitle";

const TourSection = () => (
  <>
    <div className='flex flex-col justify-center items-center w-full'>
      <SectionTitle>
        <FormattedMessage id='home.tours.title' />
      </SectionTitle>
      <p className='text-lg'>
        <FormattedMessage id='home.tours.description' />
      </p>
      <ul className='flex flex-wrap justify-center md:justify-between lg:justify-between w-full'>
        {tours.map((t) => (
          <TourCard {...t} key={t.id.toString()} />
        ))}
      </ul>
    </div>
  </>
);

export default TourSection;
