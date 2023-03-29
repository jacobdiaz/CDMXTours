import Link from "next/link";
import { FormattedMessage } from "react-intl";
import CTALink from "../actions/CTALink";

const HeroSection = () => {
  return (
    <div>
      <div
        className='bg-cover bg-center flex justify-center items-center h-full text-white'
        style={{
          height: "calc(100vh - 10rem)",
          backgroundImage:
            "url(https://cdmxtours.s3.amazonaws.com/Images/home/dsc09609.webp)",
        }}
      >
        <div className='w-3/5 flex flex-col'>
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
};

export default HeroSection;
