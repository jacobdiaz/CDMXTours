import Head from "next/head";

type HeaderProps = {
  children?: React.ReactNode;
  page_img?: string;
  keywords?: string;
  url_path?: string;
};

const PageHeader = ({
  children,
  page_img = "https://d252kj1i9nz0td.cloudfront.net/pages/Home/home_hero.jpg",
  keywords = "CDMX Bike Tours, Mexico City bike tours, Mexico City Tours",
  url_path = "/",
}: HeaderProps) => (
  <Head>
    <meta property='og:image' content={`${page_img}`} />
    <meta name='keywords' content={keywords} />
    <link rel='icon' href='/favicon.ico' />
    <link
      rel='alternate'
      href={`https://main.d355vg8zwj6c52.amplifyapp.com${url_path}`}
      hrefLang='x-default'
    />
    <link
      rel='alternate'
      href={`https://main.d355vg8zwj6c52.amplifyapp.com${url_path}`}
      hrefLang='en'
    />
    <link
      rel='alternate'
      href={`https://main.d355vg8zwj6c52.amplifyapp.com/es${url_path}`}
      hrefLang='es'
    />
    <link
      rel='canonical'
      href={`https://main.d355vg8zwj6c52.amplifyapp.com ${url_path}`}
    />

    <link rel='apple-touch-icon' href='/apple-touch-icon-iphone-60x60.png' />
    <link
      rel='apple-touch-icon'
      sizes='60x60'
      href='/apple-touch-icon-ipad-76x76.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='114x114'
      href='/apple-touch-icon-iphone-retina-120x120.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='144x144'
      href='/apple-touch-icon-ipad-retina-152x152.png'
    />
    {children}
  </Head>
);

export default PageHeader;
