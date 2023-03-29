/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: ".next",
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
