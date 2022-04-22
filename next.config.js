/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://baihunft-developing.netlify.app/',
  },
}

module.exports = nextConfig
