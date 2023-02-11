/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', process.env.STRAPI_DOMAIN],
  },
}

module.exports = nextConfig
