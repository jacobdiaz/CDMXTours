import { Tour } from '@/utils/toursdata';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
import CTALink from '../actions/CTALink';
import Collapse from '../layout/Collapse';

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
  locales,
  availability,
}: Tour) => {
  const { locale } = useRouter();

  const availabilityText = () => {
    const { type, time } = availability;
    let text = 'Availability: ';
    // Days available
    if (type === 'Weekend') text += 'Sat - Sun  ';
    else if (type === 'Weekday') text += 'Mon - Fri ';
    else text += 'Calendar or reservation only';

    //concat time
    if (time) text += `(${time})`;

    return <p> {text} </p>;
  };

  return (
    <li className="mb-10 flex flex-col justify-between h-fit w-full mr-0 md:mr-0 md:w-[24rem]">
      <article className="h-full flex flex-col justify-between">
        <div>
          <Link href={`/tour/${id}`}>
            <Image
              src={imgSrc}
              alt={imgAlt}
              className="w-full h-64 object-cover cursor-pointer"
              height={500}
              width={500}
              loading="lazy"
            />
          </Link>
          <div className="flex flex-row justify-between w-full py-5">
            <h3 className="text-card-title font-fjalla uppercase max-w-[75%] md:max-w-[275px] min-h-[90px]">
              <FormattedMessage id={tourName} />
            </h3>
            <p className="text-lg font-bold">${price.toString()}MXN</p>
          </div>
        </div>

        {/* Tour Data */}
        <div>
          <p>
            <FormattedMessage
              id="tours.duration"
              values={{ duration: duration }}
            />
          </p>
          <p>
            <FormattedMessage
              id="tours.included"
              values={{ included: included }}
            />
          </p>
          <p>
            <FormattedMessage id="tours.capacity" values={{ capacity: cap }} />
          </p>

          {/* For now only enlish tours load availibilty time */}
          {locales.includes('en') && locale === 'en' && (
            <>{availabilityText()}</>
          )}
          <CTALink
            variant="dark"
            grow={true}
            className="w-full"
            href={`/tour/${id}`}
            bottom={true}
          >
            <FormattedMessage id="tours.cta.button" />
          </CTALink>
        </div>
      </article>
    </li>
  );
};

export default TourCard;
