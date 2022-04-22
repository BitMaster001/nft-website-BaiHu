/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://baihu-developing.netlify.app/',
  },
}

module.exports = nextConfig
