import NavBar from "@/components/NavBar";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

type HomeProps = {
  dir: string;
};

export default function Home({ dir }: HomeProps) {
  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({ id: "home.head.title" });
  const description = intl.formatMessage({
    id: "home.head.meta.description",
  });

  console.log("locales", locales);
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

      <header>
        <NavBar />
        <div className='bg-red-500 font-ssp'>
          {locales &&
            [...locales].sort().map((locale) => (
              <Link key={locale} href='/' locale={locale}>
                {locale}
              </Link>
            ))}
        </div>
      </header>

      <main dir={dir} className='font-ssp'>
        <h1>
          <FormattedMessage id='home.title' />
        </h1>

        <p>
          <FormattedMessage id='home.description' />
        </p>
      </main>
    </div>
  );
}
