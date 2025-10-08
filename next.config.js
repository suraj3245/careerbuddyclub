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

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'test.careerbuddyclub.com',
          },
        ],
        destination: 'https://careerbuddyclub.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;