import TourCard from "../tours/TourCard";
import { tours } from "@/utils/toursdata";
import { FormattedMessage } from "react-intl";
import SectionTitle from "./SectionTitle";

const TourSection = () => (
  <>
    <div className='pt-24 flex flex-col justify-center items-center w-full'>
      <SectionTitle>
        <FormattedMessage id='home.tours.title' />
      </SectionTitle>
      <p className='text-lg'>
        <FormattedMessage id='home.tours.description' />
      </p>
      <ul className='py-10 flex flex-wrap justify-center md:justify-between'>
        {tours.map((t) => (
          <TourCard {...t} key={t.id.toString()} />
        ))}
      </ul>
    </div>
  </>
);

export default TourSection;
