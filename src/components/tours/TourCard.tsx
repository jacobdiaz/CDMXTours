import { Tour } from "@/utils/toursdata";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

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

  const getCardImage = () => {
    if (locale === "es" && thumbES) return thumbES;
    if (locale === "en" && thumbEN) return thumbEN;
    return imgSrc;
  };

  return (
    <div className="mb-10 flex flex-col justify-between h-fit w-full">
      <article className="h-full flex flex-col justify-between">
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
          <p className="my-5 text-center">
            <FormattedMessage
              id={shortDescription ? shortDescription : description}
            />
          </p>
        </div>

        <div className="flex flex-col justify-center ">
          <Link
            href={`/tour/${id}`}
            className="font-bold text-lg hover:font-black text-center"
          >
            {/* Book Now */}
            <FormattedMessage id="tours.cta.button" />
          </Link>
        </div>
      </article>
    </div>
  );
};

export default TourCard;
