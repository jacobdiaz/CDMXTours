import Link from "next/link";
import CTALink from "../actions/CTALink";
import SectionTitle from "./SectionTitle";
import Map from "../layout/Map";

const DirectionSections = () => {
  return (
    <div className='mt-20'>
      <SectionTitle margin='m-0' className='mb-5'>
        Where we meet
      </SectionTitle>
      <Map />
      <p className='text-lg mt-5'>
        We are located north of Roma Norte in the Juarez neighborhood.
      </p>
      <p className='text-lg'>
        Our address is{" "}
        <Link
          href='https://goo.gl/maps/7r4jXBxTbU3V6RQS7'
          className='underline'
        >
          Calle Versalles 88, 06600 Mexico City, Mexico
        </Link>
      </p>
      <CTALink href='https://goo.gl/maps/7r4jXBxTbU3V6RQS7' variant='dark'>
        Get Directions
      </CTALink>
    </div>
  );
};

export default DirectionSections;
