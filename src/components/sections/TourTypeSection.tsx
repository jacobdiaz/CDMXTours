import { FormattedMessage } from "react-intl";
import SectionTitle from "./SectionTitle";
import CTALink from "../actions/CTALink";
import Image from "next/image";
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
  <div className="relative w-full min-h-[20rem] md:min-h-[30rem] md:w-1/3 p-4 flex flex-col justify-center items-center mb-2">
    <Image
      src={bgImage}
      alt="Tour Type Card"
      className="absolute inset-0 object-cover w-full h-full"
      width={1080}
      height={720}
      loading="lazy"
    />
    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
    <div className=" z-10 flex flex-col justify-center items-center">
      {children}
    </div>
  </div>
);

const TypeCard = ({ title, url, bgImage }: TypeCardProps) => (
  <CenterContainer bgImage={bgImage}>
    <SectionTitle color="text-white">{title}</SectionTitle>
    <CTALink href={url} className="bg-primary">
      View
    </CTALink>
  </CenterContainer>
);

const TourTypeData = [
  {
    title: "Bike Tours",
    url: "/cdmx-bike-tours",
    bgImage:
      "https://d252kj1i9nz0td.cloudfront.net/gallery_images/Architectural/arch_4.jpg",
  },
  {
    title: "Walking Tours",
    url: "/cdmx-walking-tours",
    bgImage:
      "https://d252kj1i9nz0td.cloudfront.net/gallery_images/SouthSide/southside_v2_2.jpg",
  },
  {
    title: "Bike Rentals",
    url: "/cdmx-bike-rentals",
    bgImage: "https://d252kj1i9nz0td.cloudfront.net/bike.jpeg",
  },
];
const TourTypeSection = () => (
  <section className="flex flex-col md:flex-row pt-5 px-2">
    {TourTypeData.map((t, idx) => (
      <TypeCard {...t} key={idx} />
    ))}
  </section>
);

export default TourTypeSection;
