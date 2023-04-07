import AboutUsSection from "@/components/sections/AboutUsSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import TourSection from "@/components/sections/ToursSection";
import Head from "next/head";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import Banner from "@/components/layout/Banner";
import DirectionSections from "@/components/sections/DirectionSections";
type HomeProps = {
  dir: string;
};

export default function Home({ dir }: HomeProps) {
  // TODO Change all image files to not be in webp or have fallbacks
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
        <div className='px-12 md:pb-32 md:px-72'>
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
          <DirectionSections />
        </div>
      </main>
    </div>
  );
}
