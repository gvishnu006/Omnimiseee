/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
  },
  // serverComponentsExternalPackages moved out of experimental in Next 14.2
  serverExternalPackages: ['@omnimise/db'],
  transpilePackages: ['@omnimise/shared'],
};

module.exports = nextConfig;
