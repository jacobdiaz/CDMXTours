import TourCard from "./TourCard";
import { tours } from "@/utils/tours";
import { FormattedMessage } from "react-intl";

const TourSection = () => {
  return (
    <>
      <div className='pt-20 flex flex-col justify-center items-center w-full px-20'>
        <h2 className='text-3xl font-fjalla text-primary uppercase mb-5'>
          <FormattedMessage id='home.tours.title' />
        </h2>
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
};

export default TourSection;
