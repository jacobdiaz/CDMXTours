import AboutUsSection from "@/components/sections/AboutUsSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import TourSection from "@/components/sections/ToursSection";
import Head from "next/head";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import DirectionSections from "@/components/sections/DirectionSections";
import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/components/layout/Banner"));

type HomeProps = {
  dir: string;
};

export default function Home({ dir }: HomeProps) {
  const intl = useIntl();
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
        <meta
          property='og:image'
          content='https://d252kj1i9nz0td.cloudfront.net/pages/Home/home_hero.jpg'
        />
        <meta
          name='keywords'
          content='CDMX Bike Tours, Mexico City bike tours, Mexico City Tours'
        />
        <meta property='og:title' content={`${title}`} />
        <meta property='og:description' content={`${description}`} />

        <link rel='icon' href='/favicon.ico' />

        <link
          rel='alternate'
          href='https://main.d355vg8zwj6c52.amplifyapp.com/'
          hrefLang='x-default'
        />
        <link
          rel='alternate'
          href='https://main.d355vg8zwj6c52.amplifyapp.com/en'
          hrefLang='en'
        />
        <link
          rel='alternate'
          href='https://main.d355vg8zwj6c52.amplifyapp.com/es'
          hrefLang='es'
        />
        <link
          rel='canonical'
          href='https://main.d355vg8zwj6c52.amplifyapp.com/'
        />
      </Head>

      <main dir={dir} className='font-ssp'>
        <HeroSection />
        <AboutUsSection />
        <div className='page-container'>
          <TourSection />
          <ContactSection />
          {/* TODO Fix this image to cloudfront */}
          {locales === "es" && (
            <Banner
              alt='Discount Banner'
              src='https://d252kj1i9nz0td.cloudfront.net/pages/Blog/blog_hero.jpg'
            >
              SI VIVES EN CDMX RECIBES UN 10% DE DESCUENTO Y SI DECIDES TRAER TU
              PROPIA BICI OBTIENES UN 10% EXTRA.
            </Banner>
          )}
          <DirectionSections />
        </div>
      </main>
    </div>
  );
}
