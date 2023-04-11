import { Tours } from "../../../utils/toursdata";
import { useRouter } from "next/router";
import Map from "@/components/layout/Map";
import CTALink from "@/components/actions/CTALink";
import ImageGallery from "@/components/tours/ImageGallery";
import Divider from "@/components/layout/Divider";
import TourSection from "@/components/tours/TourSection";
import Link from "next/link";
import ReserveBar from "@/components/tours/ReserveBar";
import DatePicker from "@/components/tours/DatePicker";

const TourPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const tour = Tours.find((t) => t.id === parseInt(id as string));
  if (tour === undefined) return null;
  // TODO add a head and Language // TODO Add a share button to tour
  return (
    <>
      <div className='px-12 md:pb-32 md:px-72'>
        <div className='pt-16 md:pt-24 w-full mb-10 flex flex-col md:flex-row font-fjalla md:items-center justify-between'>
          <div className='flex flex-col w-full'>
            <Link
              href='/book-a-tour'
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
              View All Tours
            </Link>
            <div className='w-full flex justify-between'>
              <h1 className='text-4xl '>{tour?.tourName}</h1>
              <p className='hidden md:block md:text-2xl'>
                ${tour?.price.toString()}MXN / Person
              </p>
            </div>
          </div>
        </div>
        {/* Images */}
        <ImageGallery tour={tour} />
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
              <p className='mt-5'>
                To ensure a smooth start to your tour, we will meet you at our
                designated meeting point located at{" "}
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
                . Our meeting point is conveniently located and easy to find, so
                you won't have to worry about getting lost on your way to the
                start of the tour. When you arrive, you'll be greeted by our
                friendly and knowledgeable staff who will get you set up with
                your bike and all the gear you need for a comfortable and safe
                ride. From there, we'll head out on an adventure together,
                exploring the city's vibrant neighborhoods, historical
                landmarks, and hidden gems.
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
          <div className='hidden md:block '>
            <DatePicker
              maxQuantity={parseInt(tour.cap)}
              tourName={tour.tourName}
            />
          </div>
        </div>
      </div>
      {/* Mobile Reserve Bar */}
      <ReserveBar tourData={tour} />
    </>
  );
};

export default TourPage;
