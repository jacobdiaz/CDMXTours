import Link from "next/link";
import CTALink from "../actions/CTALink";
import SectionTitle from "./SectionTitle";
import Map from "../layout/Map";
import { useIntl } from "react-intl";

const DirectionSections = () => {
  const intl = useIntl();

  return (
    <div className='mt-20'>
      <SectionTitle margin='m-0' className='mb-5'>
        {intl.formatMessage({ id: "home.directions.title" })}
      </SectionTitle>
      <p className='mt-5 text-lg'>
        {intl.formatMessage({ id: "home.directions.description_1" })}
        <span>
          <Link
            href='https://goo.gl/maps/7r4jXBxTbU3V6RQS7'
            className='underline'
            target='_blank'
            rel='nofollow'
          >
            Calle Versalles 88, 06600 Mexico City, Mexico
          </Link>
        </span>
        . {intl.formatMessage({ id: "home.directions.description_2" })}
      </p>

      <CTALink
        href='https://goo.gl/maps/7r4jXBxTbU3V6RQS7'
        variant='dark'
        className='w-full md:w-fit'
      >
        {intl.formatMessage({ id: "home.directions.getDirections" })}
      </CTALink>
      <Map />
    </div>
  );
};

export default DirectionSections;
