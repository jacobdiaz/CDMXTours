import AboutUsSection from "@/components/sections/AboutUsSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import TourSection from "@/components/sections/ToursSection";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import DirectionSections from "@/components/sections/DirectionSections";
import dynamic from "next/dynamic";
import PageHeader from "@/components/layout/PageHeader";
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
    <main dir={dir} className='font-ssp'>
      <PageHeader>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={`${title}`} />
        <meta property='og:description' content={`${description}`} />
      </PageHeader>
      <HeroSection />
      <AboutUsSection />
      <div className='page-container'>
        <TourSection />
        <ContactSection />
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
  );
}
