import HeroSmall from "@/components/layout/HeroSmall";
import PageHeader from "@/components/layout/PageHeader";
import SectionTitle from "@/components/sections/SectionTitle";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  const title = "About CDMX Bike Tours";
  const description =
    "We are a group of passionate and experienced cyclists who have a love for Mexico City and all the amazing sights it has to offer! Our goal is to provide you with an unforgettable bike tour experience that will leave you with a newfound appreciation for this vibrant city.";
  return (
    <div className='page-container'>
      <PageHeader
        page_img='https://d252kj1i9nz0td.cloudfront.net/pages/About/about.jpeg'
        keywords='CDMX Bike Tours, Mexico City bike tours, Mexico City Tours, About CDMX Bike Tours'
        url_path='/about-us'
      >
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
      </PageHeader>
      <div className='flex flex-col justify-center mt-16 md:mt-36 md:mb-0'>
        <Link
          href='/'
          className='text-black opacity-40 flex flex-row py-5 font-medium font-ssp underline w-fit'
        >
          <span className='pr-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              stroke='currentColor'
              fill='none'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1' />
            </svg>
          </span>
          Home
        </Link>
        <div className='grid md:grid-cols-2 gap-5'>
          <Image
            src='https://d252kj1i9nz0td.cloudfront.net/pages/About/about.jpeg'
            alt='Image of a bike tour guide'
            width={540}
            height={750}
            priority
          />
          <div className='my-5'>
            <SectionTitle margin='my-5'>About CDMX Bike Tours</SectionTitle>
            <p>
              We are a group of passionate and experienced cyclists who have a
              love for Mexico City and all the amazing sights it has to offer!
              Our goal is to provide you with an unforgettable bike tour
              experience that will leave you with a newfound appreciation for
              this vibrant city.
            </p>

            <br />

            <p>
              Our team is made up of knowledgeable and friendly guides who are
              eager to share their love of cycling and the city with you. With
              years of experience leading bike tours in Mexico City, we have
              honed our skills and are well-equipped to navigate the city's
              bustling streets and hidden gems. We take pride in providing safe,
              informative, and enjoyable bike tours for all ages and skill
              levels.
            </p>

            <br />
            <p>
              {" "}
              Our tours allow you to experience the city in a unique way, taking
              you off the beaten path to discover hidden gems that you might not
              otherwise find. We offer a variety of tours that will take you to
              places such as the Historic Center, the University City, hotspots
              like Coyoacán, Roma, Condesa and monumental sites such as
              Chapultepec park.
            </p>

            <Link
              href='/book-a-tour'
              className='btn text-white bg-primary rounded-none mt-5 w-full md:w-fit'
            >
              Check out our tours!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
