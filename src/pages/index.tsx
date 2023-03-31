import AboutUsSection from "@/components/sections/AboutUsSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import TourSection from "@/components/sections/ToursSection";
import Head from "next/head";
import { useIntl } from "react-intl";
import Map from "@/components/layout/Map";
import SectionTitle from "@/components/sections/SectionTitle";
import Link from "next/link";
import CTALink from "@/components/actions/CTALink";
import Reviews from "@/components/layout/Reviews";
import { useRouter } from "next/router";
import Banner from "@/components/layout/Banner";
type HomeProps = {
  dir: string;
};

export default function Home({ dir }: HomeProps) {
  const intl = useIntl();
  // Get the current locale
  const { locale: locales } = useRouter();

  const title = intl.formatMessage({ id: "home.head.title" });
  const description = intl.formatMessage({
    id: "home.head.meta.description",
  });

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />

        <link rel='icon' href='/favicon.ico' />

        {/* Add hreflang links */}
        {/* TODOA Add correct head for SEO */}
        <link rel='alternate' href='http://example.com' hrefLang='x-default' />
        <link rel='alternate' href='http://example.com/en' hrefLang='en' />
        <link rel='alternate' href='http://example.com/es' hrefLang='es' />
      </Head>

      <header></header>

      <main dir={dir} className='font-ssp'>
        <HeroSection />
        <AboutUsSection />
        <div className='px-32'>
          <TourSection />
          <ContactSection />
          {locales === "es" && (
            <Banner
              background={
                "https://cdmxtours.s3.amazonaws.com/Images/home/DSC09374.webp"
              }
            >
              SI VIVES EN CDMX RECIBES UN 10% DE DESCUENTO Y SI
              <br /> DECIDES TRAER TU PROPIA BICI OBTIENES UN 10% EXTRA
            </Banner>
          )}
          <div className='mt-24'>
            <SectionTitle margin='m-0'>Where we meet</SectionTitle>
            {/* <Map /> */}
            <p className='text-lg'>
              We are located north of Roma Norte in the Juarez neighborhood.
            </p>
            <p className='text-lg'>
              Our address is{" "}
              <Link
                href='https://goo.gl/maps/7r4jXBxTbU3V6RQS7'
                className='underline'
              >
                Calle Versalles 88, 06600 Mexico City, Mexico
              </Link>
            </p>
            <CTALink
              href='https://goo.gl/maps/7r4jXBxTbU3V6RQS7'
              variant='dark'
            >
              Get Directions
            </CTALink>

            <Reviews />
          </div>
        </div>
      </main>
    </div>
  );
}
