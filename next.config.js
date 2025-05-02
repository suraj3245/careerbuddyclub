/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['test.careerbuddyclub.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'test.careerbuddyclub.com',
          port: '8080',
          pathname: '/',
        },
      ],
    },
  };
  
  module.exports = nextConfig;