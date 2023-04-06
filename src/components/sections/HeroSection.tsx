import Link from "next/link";
import { FormattedMessage } from "react-intl";
import CTALink from "../actions/CTALink";

const HeroSection = () => (
  <div className='relative'>
    <img
      src='https://d252kj1i9nz0td.cloudfront.net/pages/Home/home_hero.jpg'
      alt='Bike Tours CDMX'
      className='w-full object-cover'
      style={{ height: "90vh" }}
    />
    <div
      className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 text-white'
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
  </div>
);

export default HeroSection;
