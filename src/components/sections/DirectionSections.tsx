import Link from "next/link";
import CTALink from "../actions/CTALink";
import SectionTitle from "./SectionTitle";
import Map from "../layout/Map";
import { useIntl } from "react-intl";

const DirectionSections = () => {
  const intl = useIntl();
  return (
    <section className='mt-20'>
      <SectionTitle margin='m-0' className='mb-5'>
        {intl.formatMessage({ id: "home.directions.title" })}
      </SectionTitle>
      <p className='mt-5 text-lg'>
        {intl.formatMessage({ id: "home.directions.description_1" })}
        <span>
          <Link
            href='https://maps.app.goo.gl/mzJeRCR36R2p3aGG9'
            className='underline'
            target='_blank'
            rel='nofollow'
          >
            Londres 17, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX
          </Link>
        </span>
        . {intl.formatMessage({ id: "home.directions.description_2" })}
      </p>

      <CTALink
        href='https://maps.app.goo.gl/mzJeRCR36R2p3aGG9'
        variant='dark'
        className='w-full md:w-fit'
      >
        {intl.formatMessage({ id: "home.directions.getDirections" })}
      </CTALink>
      <Map
        address='Londres 17, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX'
        googleMapsLink='https://maps.app.goo.gl/mzJeRCR36R2p3aGG9'
        coords={{ lat: 19.42755, lng: -99.15569 }}
      />
    </section>
  );
};

export default DirectionSections;
