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
    <li
      className='mb-10 md:mb-5 flex flex-col justify-between'
      style={{ width: "28rem", minHeight: "600px" }}
    >
      <div>
        <img
          src={imgSrc}
          alt={imgAlt}
          className='w-full h-64 object-cover'
          style={{ minWidth: "250px" }}
        />
        <div className='flex flex-row justify-between w-full py-5'>
          <h4
            className='text-card-title font-fjalla uppercase'
            style={{ maxWidth: "250px" }}
          >
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
