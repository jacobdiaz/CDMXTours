import Image from "next/image";
import Link from "next/link";

type Props = {
  tourType: string;
  imageSrc: string;
};

const TourTypeCard = ({ tourType, imageSrc }: Props) => {
  return (
    <li className='w-1/3 p-2'>
      <Link
        className='relative font-fjalla'
        href={{
          pathname: "/book-a-tour",
          query: { type: tourType },
        }}
      >
        <Image
          loading='lazy'
          className='w-full h-auto transition-transform duration-300ms'
          src={imageSrc}
          alt={tourType}
          height='0'
          width='0'
          sizes='80vw'
        />
        <div className='absolute inset-0 flex items-center justify-center'>
          <p className='text-white text-center text-3xl uppercase font-bold z-10'>
            {tourType === "Reservation"
              ? "Tours By Reservation"
              : `${tourType} Tours`}
          </p>
          <div className='absolute opacity-50 z-0 inset-0 bg-gradient-to-t from-black to-transparent'></div>
        </div>
      </Link>
    </li>
  );
};

export default TourTypeCard;
