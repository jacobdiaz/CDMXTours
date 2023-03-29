import { Tour } from "@/utils/tours";
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
    <li className='p-5 ' style={{ width: "28rem" }}>
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
      <p>{description}</p>

      <div className='py-5'>
        <p>
          <strong>Duration:</strong> {duration}
        </p>
        <p>
          <strong>Included:</strong> {included}
        </p>
        <p>
          <strong>Group Capacity:</strong> {cap}
        </p>
      </div>

      <CTALink variant='dark' href={`/tour/${id}-${encodeURI(tourName)}`}>
        Book This Tour
      </CTALink>
    </li>
  );
};

export default TourCard;
