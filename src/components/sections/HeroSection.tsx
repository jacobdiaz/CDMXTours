import Image from "next/image";
import { FormattedMessage } from "react-intl";
import ImageOverlay from "../layout/ImageOverlay";
import CTALink from "../actions/CTALink";

const HeroSection = () => (
  <section className="relative overflow-hidden">
    {/* Desktop Hero Image */}
    <div className="hidden md:block">
      <Image
        src="https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Pages/Home/hero_home_desktop-5pAW69OtptXVorSKiAuPvFegYXBAAI.jpg"
        alt="Bike Tours CDMX"
        className="w-full object-cover h-[85vh] md:h-[90vh]"
        height={1080}
        width={1920}
        loading="eager"
        priority={true}
      />
    </div>

    {/* Mobile Hero Image */}
    <Image
      src="https://sl0augsoqrtozrln.public.blob.vercel-storage.com/Pages/Home/hero_home_mobile-xWtAhzDevWq4YmFo9oGQzXnvrNFkH6.jpg"
      alt="Bike Tours CDMX"
      className="w-full object-cover h-[85vh] visible md:h-[90vh] md:hidden scale-105"
      height={1080}
      width={1920}
      loading="eager"
      priority={true}
    />
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 text-white z-10 leading-[5.0em]"
      style={{
        maxWidth: "800px",
      }}
    >
      <div className="flex flex-col items-center h-90">
        <h1 className="text-[40px] whitespace-nowrap uppercase font-spartan font-black leading-snug tracking-widest">
          Tours En Bici
        </h1>

        <h3 className="leading-none text-lg uppercase font-bold whitespace-nowrap">
          Architecture Tours in Mexico City
        </h3>
      </div>

      <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 translate-y-48">
        <CTALink href="/book-a-tour" variant="light" className="">
          <FormattedMessage id="tours.cta.booknow" />
        </CTALink>
      </div>
    </div>
    <ImageOverlay />
  </section>
);

export default HeroSection;
