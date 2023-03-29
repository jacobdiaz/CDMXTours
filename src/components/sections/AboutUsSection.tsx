import { FormattedMessage } from "react-intl";
import CTALink from "../actions/CTALink";
import SectionTitle from "./SectionTitle";

const AboutUsSection = () => (
  <>
    {/* Row 1 */}
    <div className='grid md:grid-cols-2	'>
      {/* Col 1 */}
      <div className='hidden md:block w-full '>
        <img
          className='w-full h-full object-cover'
          src='https://cdmxtours.s3.amazonaws.com/Images/home/dsc00059.webp'
          alt='Tours En Bici Logo'
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
    <div className='grid grid-cols-1 md:grid-cols-2 h-80 max-h-64 overflow-hidden'>
      <div
        aria-label='Architectural Bike Tour in Mexico City'
        className='bg-cover bg-bottom flex justify-center items-center'
        style={{
          backgroundImage:
            "url(https://cdmxtours.s3.amazonaws.com/Images/home/dsc00024.webp)",
          backgroundPosition: "center bottom 30%",
        }}
      ></div>
      <div
        aria-label='Image of the Roma Condesa Bike Tour CDMX'
        className='hidden md:flex bg-cover bg-bottom justify-center items-center'
        style={{
          backgroundImage:
            "url(https://cdmxtours.s3.amazonaws.com/Images/home/romacondesabiketour-min.webp)",
          backgroundPosition: "center bottom 30%",
        }}
      ></div>
    </div>
  </>
);

export default AboutUsSection;
