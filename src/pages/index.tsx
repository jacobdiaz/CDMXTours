import Hero from "@/components/Hero";
import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";

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
        <link rel='alternate' href='http://example.com' hrefLang='x-default' />
        <link rel='alternate' href='http://example.com/en' hrefLang='en' />
        <link rel='alternate' href='http://example.com/es' hrefLang='es' />
      </Head>

      <header></header>

      <main dir={dir} className='font-ssp'>
        <Hero />
      </main>
    </div>
  );
}
