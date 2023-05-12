import { Tour } from "@/utils/toursdata";
import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
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
    <article className='h-full flex flex-col justify-between'>
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
          <h3 className='text-card-title font-fjalla uppercase max-w-[75%] md:max-w-[250px] min-h-[60px]'>
            <FormattedMessage id={tourName} />
          </h3>
          <p className='text-lg font-bold'>${price.toString()}MXN</p>
        </div>

        <FormattedMessage
          id={description}
          values={{
            p: (...chunks) => <p>{chunks}</p>,
            br: <br />,
          }}
        />
      </div>

      <div className='font-bold'>
        <p>
          <FormattedMessage
            id='tours.duration'
            values={{ duration: duration }}
          />
        </p>
        <p>
          <FormattedMessage
            id='tours.included'
            values={{ included: included }}
          />
        </p>
        <p>
          <FormattedMessage id='tours.capacity' values={{ capacity: cap }} />
        </p>
        <CTALink
          variant='dark'
          grow={true}
          className='w-full'
          href={`/tour/${id}`}
          bottom={true}
        >
          <FormattedMessage id='tours.cta.button' />
        </CTALink>
      </div>
    </article>
  </li>
);

export default TourCard;
