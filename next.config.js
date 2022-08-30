/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ["en-US", "fr", "nl-NL", "nl-BE"],
    defaultLocale: "en-US",

    domains: [
      {
        // Note: subdomains must be included in the domain value to be matched
        // e.g. www.example.com should be used if that is the expected hostname
        domain: "localhost:300",
        defaultLocale: "en-US",
      },
      {
        domain: "fr.localhost:300",
        defaultLocale: "fr",
      },
      {
        domain: "smartgift.nl",
        defaultLocale: "nl-NL",
        // specify other locales that should be redirected
        // to this domain
        locales: ["nl-BE"],
      },
    ],
  },
};

module.exports = nextConfig;
