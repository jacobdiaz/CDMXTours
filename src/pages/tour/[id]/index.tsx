import { Tours } from "../../../utils/toursdata";
import { useRouter } from "next/router";
import Calendar from "@/components/actions/Calendar";
import Map from "@/components/layout/Map";
import CTALink from "@/components/actions/CTALink";
import ImageGallery from "@/components/tours/ImageGallery";
import Divider from "@/components/layout/Divider";
import TourSection from "@/components/tours/TourSection";
import Link from "next/link";
import { useState } from "react";
import ReserveBar from "@/components/tours/ReserveBar";

const TourPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const tour = Tours.find((t) => t.id === parseInt(id as string));
  if (tour === undefined) return null;
  return (
    <>
      // TODO add a head and Language
      <div className='px-6 md:pb-32 md:px-72'>
        <div className='pt-11 md:pt-36 w-full mb-10 flex flex-col md:flex-row font-fjalla md:items-center justify-between'>
          <Link
            href='/book-a-tour'
            className='text-black opacity-40 flex flex-row py-5 font-medium font-ssp underline'
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
                {" "}
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />{" "}
                <path d='M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1' />{" "}
              </svg>
            </span>
            View All Tours
          </Link>
          <h1 className='text-4xl '>{tour?.tourName}</h1>
          <p className='hidden md:block md:text-2xl'>
            ${tour?.price.toString()}MXN / Person
          </p>
        </div>

        {/* Images */}
        <ImageGallery gallery={tour.gallery} />

        {/* Tour Content */}
        <div className='md:grid grid-cols-3 pt-10 gap-5'>
          {/* Col 1 */}
          <div className='col-span-2 md:pr-10'>
            <TourSection title='Description'>
              <p>{tour?.description}</p>
            </TourSection>

            {/* Whats Included & Group Capacity */}
            <div className='flex flex-row gap-1 md:gap-0'>
              <TourSection title={`What's Included`} hideDivider>
                <p>This tour includes {tour?.included}</p>
              </TourSection>
              <Divider orientation='vertical' />
              <TourSection title='Group Capacity' hideDivider>
                <p>
                  This Tour allows for up to{" "}
                  <span className='font-bold'> {tour?.cap} people</span>
                </p>
              </TourSection>
            </div>
            <Divider />

            {/* Where to meet */}
            <TourSection title='Where to Meet'>
              <p>
                Meet with your group and tour guide at{" "}
                <span className='font-bold'>{tour?.meetingAddr}</span>.
              </p>

              {/* TODO CREATE A SEO FRIENDLY DIRECTIONS BUTTON THAT LOOKS LIKE THIS */}
              <a
                href='https://goo.gl/maps/qyY8KLrSGXXNxEoe7'
                target='_blank'
                rel='noopener noreferrer'
                itemProp='url'
                className='btn bg-primary text-white py-2 rounded-none px-5 font-normal my-5 text-lg w-full md:w-fit'
              >
                <span itemProp='Tours en Bici - Architectural Bike Tours CDMX'>
                  Get Directions
                </span>
              </a>
              {
                // TODO UNCOMMENT MAP FOR PROD
              }
              <Map />
            </TourSection>

            {/* Have a Question*/}
            <TourSection title='Have a Question?' hideDivider>
              <p>
                Check out our FAQs page, or send us a message! You can reach a
                member of CDMX Tours at{" "}
                <Link
                  href='tel:+52-1-55-8333-3677'
                  rel='nofollow'
                  className='underline font-bold'
                >
                  +52 1 55 8333 3677
                </Link>
                .
              </p>
              <CTALink
                variant='dark'
                href='/contact'
                className='w-full md:w-fit'
              >
                Contact Us
              </CTALink>
            </TourSection>
          </div>

          {/* Col 2 */}
          <div className='hidden md:block'>
            <Calendar />
          </div>
        </div>
      </div>
      <ReserveBar price={tour.price} capacity={tour.cap} />
    </>
  );
};

export default TourPage;
