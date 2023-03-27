import TourCard from "./TourCard";
import { tours } from "@/utils/tours";

const TourSection = () => {
  return (
    <>
      <div className='pt-20 flex flex-col justify-center items-center w-full px-20'>
        <h2 className='text-3xl font-fjalla text-primary uppercase mb-5'>
          Our Bike Tours
        </h2>
        <p className='text-lg'>
          We leave during the week by reservation and on the weekend by call.
          You can find the call in our Bike Tour calendar published in the
          highlights of Instragram.
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
