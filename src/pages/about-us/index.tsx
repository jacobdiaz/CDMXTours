import PageHeader from "@/components/layout/PageHeader";
import SectionTitle from "@/components/sections/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

const AboutPage = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "about.title" });
  const description = intl.formatMessage({ id: "about.description_1" });
  const router = useRouter();

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
        <button
          onClick={() => {
            router.back();
          }}
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
          <FormattedMessage id='about.back' />
        </button>
        <div className='grid md:grid-cols-2 gap-5'>
          <Image
            src='https://d252kj1i9nz0td.cloudfront.net/pages/About/about.jpeg'
            alt='Image of a bike tour guide'
            width={540}
            height={750}
            priority
          />
          <div className='mb-5'>
            <SectionTitle margin='mb-5'>
              <FormattedMessage id='about.title' />
            </SectionTitle>
            <p>
              <FormattedMessage id='about.description_1' />
            </p>
            <br />
            <p>
              <FormattedMessage id='about.description_2' />
            </p>
            <br />
            <p>
              {" "}
              <FormattedMessage id='about.description_3' />
            </p>
            <Link
              href='/book-a-tour'
              className='btn text-white bg-primary rounded-none mt-5 w-full md:w-fit'
            >
              <FormattedMessage id='about.check_tours' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
