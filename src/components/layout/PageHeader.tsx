import Head from "next/head";

type HeaderProps = {
  children?: React.ReactNode;
  page_img?: string;
  type?: string;
  keywords?: string;
  url_path?: string;
  socialTitle?: string;
  socialDescription?: string;
};

const PageHeader = ({
  children,
  type = "website",
  page_img = "https://d252kj1i9nz0td.cloudfront.net/pages/Home/home_hero.jpg",
  keywords = "CDMX Tours, Bike Tours Mexico City, CDMX Bike Tours, Tours En Bici, Mexico City bike tours, Mexico City Tours, Bike Tours CDMX, Bike Tours, Architecture Tours Mexico City, Taco Tours CDMX, Tours En Bici CDMX ",
  url_path = "/",
  socialTitle = "CDMX Bike Tours",
  socialDescription = "Discover Mexico City by bike with our guided tours. We offer a variety of tours to suit your needs. Book your tour today!",
}: HeaderProps) => (
  <Head>
    <meta property="og:image" content={page_img} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:secure_url" content={page_img} />
    <meta property="og:image:type" content="image/jpeg" />
    <meta name="keywords" content={keywords} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:type" content={type} />
    <meta name="twitter:title" content={socialTitle} />
    <meta name="twitter:description" content={socialDescription} />
    <meta name="twitter:image" content={page_img} />
    <link rel="icon" href="/favicon.ico" />
    <link
      rel="alternate"
      href={`https://www.cdmxtours.com/${url_path}`}
      hrefLang="x-default"
    />
    <link
      rel="alternate"
      href={`https://www.cdmxtours.com/${url_path}`}
      hrefLang="en"
    />
    <link
      rel="alternate"
      href={`https://www.cdmxtours.com/es/${url_path}`}
      hrefLang="es"
    />
    <link rel="canonical" href={`https://www.cdmxtours.com/${url_path}`} />

    <link rel="apple-touch-icon" href="/apple-touch-icon-iphone-60x60.png" />
    <link
      rel="apple-touch-icon"
      sizes="60x60"
      href="/apple-touch-icon-ipad-76x76.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/apple-touch-icon-iphone-retina-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/apple-touch-icon-ipad-retina-152x152.png"
    />
    {children}
  </Head>
);

export default PageHeader;
