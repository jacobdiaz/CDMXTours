import TourCard from "./TourCard";
import { tours } from "@/utils/toursdata";
import { FormattedMessage } from "react-intl";
import SectionTitle from "../sections/SectionTitle";

const TourSection = () => (
  <>
    <div className='pt-20 flex flex-col justify-center items-center w-full px-20'>
      <SectionTitle>
        <FormattedMessage id='home.tours.title' />
      </SectionTitle>
      <p className='text-lg'>
        <FormattedMessage id='home.tours.description' />
      </p>
    </div>

    <ul className='p-10 flex flex-wrap justify-center'>
      {tours.map((t) => (
        <TourCard {...t} key={t.id.toString()} />
      ))}
    </ul>
  </>
);

export default TourSection;
