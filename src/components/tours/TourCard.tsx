import { Tour } from "@/utils/toursdata";
import Image from "next/image";
import Link from "next/link";
import CTALink from "../actions/CTALink";

const TourCard = ({
  id,
  tourName,
  price,
  duration,
  cap,
  description,
  included,
  imgSrc,
  imgAlt,
}: Tour) => (
  <li className='mb-10 flex flex-col justify-between min-h-[600px] w-full mr-0 md:mr-0 md:w-[24rem]'>
    <article>
      <div>
        <Link href={`/tour/${id}`}>
          <Image
            src={imgSrc}
            alt={imgAlt}
            className='w-full h-64 object-cover cursor-pointer'
            height={500}
            width={500}
            loading='lazy'
          />
        </Link>
        <div className='flex flex-row justify-between w-full py-5'>
          <h3 className='text-card-title font-fjalla uppercase max-w-[75%] md:max-w-[250px]'>
            {tourName}
          </h3>
          <p className='text-lg font-bold'>${price.toString()}MXN</p>
        </div>
        <p className='mb-5'>{description}</p>
      </div>

      <div className='font-bold'>
        <p>Duration: {duration}</p>
        <p>Included: {included}</p>
        <p>Group Capacity: {cap} People</p>
        <CTALink variant='dark' grow={true} href={`/tour/${id}`} bottom={true}>
          Book This Tour
        </CTALink>
      </div>
    </article>
  </li>
);

export default TourCard;
