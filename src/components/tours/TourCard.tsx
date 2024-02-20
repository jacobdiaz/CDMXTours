import { Tour } from "@/utils/toursdata";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import CTALink from "../actions/CTALink";

const TourCard = ({
  id,
  tourName,
  description,
  imgSrc,
  thumbEN,
  thumbES,
  imgAlt,
  shortDescription,
  availability,
}: Tour) => {
  const { locale } = useRouter();

  const availabilityText = () => {
    const { type, time } = availability;
    let text = "Availability: ";
    // Days available
    if (type === "Weekend") text += "Sat - Sun  ";
    else if (type === "Weekday") text += "Mon - Fri ";
    else text += "Calendar or reservation only";

    //concat time
    if (time) text += `(${time})`;

    return <p> {text} </p>;
  };

  const getCardImage = () => {
    if (locale === "es" && thumbES) return thumbES;
    if (locale === "en" && thumbEN) return thumbEN;
    return imgSrc;
  };

  return (
    <li className="mb-10 flex flex-col justify-between h-fit w-full mr-0 md:mr-0 md:w-[21rem]">
      <article className=" min-h-[47rem] h-full flex flex-col justify-between">
        <div>
          <Link href={`/tour/${id}`}>
            <Image
              src={getCardImage()}
              alt={imgAlt}
              className="w-full h-full object-cover cursor-pointer hover:transform hover:scale-[101%] transition-transform duration-300"
              height={500}
              width={500}
              loading="lazy"
            />
          </Link>
          <div className="flex flex-row justify w-full py-2 justify-center">
            <h3 className="text-card-title font-spartan font-black text-center uppercase max-w-[75] md:max-w-[85%] min-h-[70px]">
              <FormattedMessage id={tourName} />
            </h3>
          </div>
          <p className="mb-5 text-center">
            <FormattedMessage
              id={shortDescription ? shortDescription : description}
            />
          </p>
        </div>

        {/* Tour Data */}
        <div className="flex flex-col justify-center ">
          <Link
            href={`/tour/${id}`}
            className="font-bold text-lg hover:font-black text-center"
          >
            <FormattedMessage id="tours.cta.button" />
          </Link>
        </div>
      </article>
    </li>
  );
};

export default TourCard;
