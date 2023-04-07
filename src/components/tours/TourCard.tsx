import { Tour } from "@/utils/toursdata";
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
}: Tour) => {
  return (
    <li className='mb-10 flex flex-col justify-between min-h-[600px] w-full mr-5 md:mr-0 md:w-[24rem]'>
      <div>
        <img src={imgSrc} alt={imgAlt} className='w-full h-64 object-cover' />
        <div className='flex flex-row justify-between w-full py-5'>
          <h4 className='text-card-title font-fjalla uppercase max-w-[75%] md:max-w-[250px]'>
            {tourName}
          </h4>
          <p className='text-lg'>
            <strong> ${price.toString()}MXN</strong>
          </p>
        </div>
      </div>

      <div>
        <p className='mb-5'>{description}</p>
        <p>
          <strong>Duration:</strong> {duration}
        </p>
        <p>
          <strong>Included:</strong> {included}
        </p>
        <p>
          <strong>Group Capacity:</strong> {cap}
        </p>
        <CTALink variant='dark' grow={true} href={`/tour/${id}`} bottom={true}>
          Book This Tour
        </CTALink>
      </div>
    </li>
  );
};

export default TourCard;
