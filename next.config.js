/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    DOMAIN_URL: process.env.DOMAIN_URL,
    DOMAIN_NAME: process.env.DOMAIN_NAME,
  },
  images: {
    domains: ["d252kj1i9nz0td.cloudfront.net", "lh3.googleusercontent.com"],
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
