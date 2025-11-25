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
      {
        source: '/blog-v3',
        destination: '/blog-v4',
        permanent: true,
      },
      {
        source: '/university-details/osmu',
        destination: '/university-details/1',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;