import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import CTALink from "../actions/CTALink";
import ImageOverlay from "../layout/ImageOverlay";

const HeroSection = () => (
  <div className='relative'>
    <Image
      src='https://d252kj1i9nz0td.cloudfront.net/pages/Home/home_hero.jpg'
      alt='Bike Tours CDMX'
      className='w-full object-cover h-[80vh] md:h-[90vh]'
      height={1080}
      width={1920}
      loading='eager'
    />
    <div
      className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 text-white z-10 leading-[5.0em]'
      style={{
        maxWidth: "800px",
      }}
    >
      <div className='flex flex-col'>
        <h1 className='text-page-hero uppercase font-fjalla'>
          <FormattedMessage id='home.hero.title' />
        </h1>
        <Link
          href='https://www.instagram.com/toursenbici/'
          className='opacity-70 text-lg w-fit pr-8'
        >
          @toursenbici
        </Link>
        <CTALink href='/book-a-tour'>
          <FormattedMessage id='home.hero.book.btn' />
        </CTALink>
      </div>
    </div>
    <ImageOverlay />
  </div>
);

export default HeroSection;
