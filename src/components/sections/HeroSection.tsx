import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import ImageOverlay from "../layout/ImageOverlay";

const HeroSection = () => (
  <section className="relative">
    {/* image 1 */}
    <div className="hidden md:block">
      <Image
        src="https://d252kj1i9nz0td.cloudfront.net/pages/Home/home_hero_v3.jpeg"
        alt="Bike Tours CDMX"
        className="w-full object-cover h-[80vh] md:h-[90vh]"
        height={1080}
        width={1920}
        loading="eager"
        priority={true}
      />
    </div>

    <Image
      src="https://d252kj1i9nz0td.cloudfront.net/pages/Home/home_hero_v33.jpeg"
      alt="Bike Tours CDMX"
      className="w-full object-cover h-[80vh] visible md:h-[90vh] md:hidden"
      height={1080}
      width={1920}
      loading="eager"
      priority={true}
    />
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 text-white z-10 leading-[5.0em]"
      style={{
        maxWidth: "800px",
      }}
    >
      <div className="flex flex-col">
        <h1 className="text-page-hero uppercase font-spartan font-black tracking-normal">
          <FormattedMessage id="home.hero.title" />
        </h1>
        <Link
          href="https://www.instagram.com/toursenbici/"
          className="opacity-70 text-lg w-fit pr-8"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          @toursenbici
        </Link>
      </div>
    </div>
    <ImageOverlay />
  </section>
);

export default HeroSection;
