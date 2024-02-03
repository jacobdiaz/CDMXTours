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
  page_img = "https://d252kj1i9nz0td.cloudfront.net/tours_logo.jpg",
  keywords = "CDMX Tours, bike tours, Bike Tours Mexico City, CDMX Bike Tours, Tours En Bici, Mexico City bike tours, Mexico City Tours, Bike Tours CDMX, Bike Tours, Architecture Tours Mexico City, Taco Tours CDMX, Tours En Bici CDMX ",
  url_path = "",
  socialTitle = "CDMX Bike Tours",
  socialDescription = "Discover Mexico City by bike with our guided tours. We offer a variety of tours to suit your needs. Book your tour today!",
}: HeaderProps) => {
  // Domain URL is https://www.cdmxtours.com or https://biketourcdmx.com
  const domainUrl = process.env.DOMAIN_URL;

  return (
    <Head>
      {/* Open Graph / Facebook */}
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image" content={page_img} />
      <meta property="og:image:secure_url" content={page_img} />
      <link
        rel="alternate"
        href={`${domainUrl}/${url_path}`}
        hrefLang="x-default"
      />
      <link rel="alternate" href={`${domainUrl}/${url_path}`} hrefLang="en" />
      <link
        rel="alternate"
        href={`${domainUrl}/es/${url_path}`}
        hrefLang="es"
      />
      <link rel="canonical" href={`${domainUrl}/${url_path}`} />
      <meta property="og:url" content={`${domainUrl}/${url_path}`} />
      <meta name="keywords" content={keywords} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:type" content={type} />
      <meta name="twitter:title" content={socialTitle} />
      <meta name="twitter:description" content={socialDescription} />
      <meta name="twitter:image" content={page_img} />
      <link rel="icon" href="/favicon.ico" />
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
};

export default PageHeader;
