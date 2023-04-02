import { Tours } from "../../../utils/toursdata";
import { useRouter } from "next/router";
import Calendar from "@/components/actions/Calendar";
import Map from "@/components/layout/Map";
import CTALink from "@/components/actions/CTALink";
const TourPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const tour = Tours.find((t) => t.id === parseInt(id as string));
  console.log(tour);
  return (
    <div className='px-10 pb-10 md:pb-32 md:px-32'>
      <div className='pt-28 md:pt-36 w-full mb-10 flex flex-row font-fjalla items-center justify-between'>
        <h1 className='text-4xl '>{tour?.tourName}</h1>
        <p className='text-2xl'>${tour?.price.toString()}MXN / Person</p>
      </div>
      <div className='w-full bg-gray-400 h-96'>{/* TODO INSERT IMAGES */}</div>

      <div className='grid grid-cols-3 pt-10 gap-5'>
        {/* Col 1 */}
        <div className='col-span-2 pr-10'>
          {/* Description */}
          <div className='mb-5'>
            <h4 className='mb-2 text-xl font-bold'>Description</h4>
            <p>{tour?.description}</p>
          </div>
          {/* Whats Included */}
          <div className='mb-5 flex flex-row'>
            <div>
              <h4 className='mb-2 text-xl font-bold'>What's Included</h4>
              <p>This tour includes {tour?.included}</p>
            </div>
            <div>
              <h4 className='mb-2 text-xl font-bold'>Group Capacity</h4>
              <p>
                The capacity for this tour is{" "}
                <span className='font-bold'> {tour?.cap} persons</span>
              </p>
            </div>
          </div>
          <div className='mb-5'>
            {/* Where to Meet */}
            <h4 className='mb-2 text-xl font-bold'>Where to Meet</h4>
            <p className='mb-5'>
              We will meet at{" "}
              <span className='font-bold'>{tour?.meetingAddr}</span>. Our bikes
              are located left of Terminal Juárez Pop-up hall.{" "}
            </p>
            <Map />
          </div>
          {/* Description */}
          <div className='mb-5'>
            <h4 className='mb-2 text-xl font-bold'>Have a Question?</h4>
            <p>
              Check out our FAQs page, or send us a message! You can reach a
              member of CDMX Tours at{" "}
              <a href='+52 1 55 8333 3677' type='phone' className=''>
                +52 1 55 8333 3677
              </a>
              .
            </p>
            <CTALink variant='dark' href='/contact'>
              Contact Us
            </CTALink>
          </div>
        </div>

        {/* Col 2 */}
        <Calendar />
      </div>
    </div>
  );
};

export default TourPage;
