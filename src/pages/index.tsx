import AboutUsSection from "@/components/sections/AboutUsSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import TourSection from "@/components/sections/ToursSection";
import Head from "next/head";
import { useIntl } from "react-intl";

type HomeProps = {
  dir: string;
};

export default function Home({ dir }: HomeProps) {
  const intl = useIntl();

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
        <div className='px-20'>
          <TourSection />
          <ContactSection />
          <div className='pt-25 h-12'></div>
        </div>
      </main>
    </div>
  );
}
