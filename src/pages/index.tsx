import AboutUsSection from "@/components/AboutUsSection";
import Hero from "@/components/Hero";
import TourSection from "@/components/ToursSection";
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
        <Hero />
        <AboutUsSection />
        <TourSection />
      </main>
    </div>
  );
}
