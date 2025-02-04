import { FormattedMessage } from "react-intl";
import SectionTitle from "./SectionTitle";
import CTALink from "../actions/CTALink";
import Image from "next/image";
import Link from "next/link";
type CenterContainerProps = {
  children: React.ReactNode;
  bgImage: string;
};

type TypeCardProps = {
  title: string;
  url: string;
  bgImage: string;
};

// TODO translate
const CenterContainer = ({ children, bgImage }: CenterContainerProps) => (
  <div
    className="relative w-full min-h-[12rem] md:min-h-[30rem] md:w-1/3 flex flex-col justify-center items-center mb-6"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundPosition: "center bottom 30%",
      backgroundSize: "cover",
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
    <div className=" z-10 flex flex-col justify-center items-center">
      {children}
    </div>
  </div>
);

const TypeCard = ({ title, url, bgImage }: TypeCardProps) => (
  <CenterContainer bgImage={bgImage}>
    <h3 className="text-white text-4xl md:text-3xl uppercase font-bold">
      {title}
    </h3>
    <Link href={url} className="bg-black px-6 py-1.5 mt-2 rounded-btn">
      <p className="text-white uppercase">Book Now</p>
    </Link>
  </CenterContainer>
);

const TourTypeData = [
  {
    title: "Bike Tours",
    url: "/cdmx-bike-tours",
    bgImage:
    "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Pages/Home/home_card_bike_tour_section-OWdkyvn31KnqOoltFhnhx9NlOKXzBb.jpg",
  },
  {
    title: "Walking Tours",
    url: "/cdmx-walking-tours",
    bgImage:
      "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Pages/Home/home_card_walking_tour_section-cpjRlqnNqNVzdg1GAyl1HTYxVFV7Be.jpg",
  },
  {
    title: "Bike Rentals",
    url: "/cdmx-bike-rentals",
    bgImage: "https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Pages/Home/home_card_bike_rental_card-hbMYbkiyYpIHzgRESPAg4lcLVWqocJ.jpg",
  },
];
const TourTypeSection = () => (
  <section className="flex flex-col md:flex-row pt-5">
    {TourTypeData.map((t, idx) => (
      <TypeCard {...t} key={idx} />
    ))}
  </section>
);

export default TourTypeSection;
