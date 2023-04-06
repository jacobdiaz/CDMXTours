import { FormattedMessage } from "react-intl";
import CTALink from "../actions/CTALink";
import SectionTitle from "./SectionTitle";

const AboutUsSection = () => (
  <section>
    {/* Row 1 */}
    <div className='grid md:grid-cols-2	'>
      {/* Col 1 */}
      <div className='hidden md:block w-full '>
        <img
          className='w-full h-full object-cover'
          src='https://d252kj1i9nz0td.cloudfront.net/gallery_images/Urban/urban_4.jpg'
          alt='Image of Mexico City Bike Tour Guide'
        />
      </div>
      <div className='w-full flex flex-col justify-center items-center p-16 text-center'>
        {/* Col 2 */}
        <SectionTitle>
          <FormattedMessage id='home.about.title' />
        </SectionTitle>

        <p className='text-lg text-primary'>
          <FormattedMessage id='home.about.description' />
        </p>
        <CTALink href='/' variant='dark'>
          <FormattedMessage id='home.about.btn' />
        </CTALink>
      </div>
    </div>

    {/* Row 2 */}
    <div className='grid grid-cols-1 md:grid-cols-2 h-80 overflow-hidden'>
      <div className='relative'>
        <img
          src='https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_1.jpg'
          alt='Architectural Bike Tour in Mexico City'
          className='w-full h-full absolute object-cover'
        />
      </div>
      <div className='hidden md:flex relative'>
        <img
          src='https://d252kj1i9nz0td.cloudfront.net/pages/Home/home_disc_arch_1.jpg'
          alt='Image of the Roma Condesa Bike Tour CDMX'
          className='w-full h-full absolute object-cover'
          style={{ objectPosition: "center 70%" }}
        />
      </div>
    </div>
  </section>
);

export default AboutUsSection;
