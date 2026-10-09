/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['test.careerbuddyclub.com', 'ui-avatars.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'test.careerbuddyclub.com',
        port: '8080',
        pathname: '/',
      },
      // CareerWise mentor / testimonial photography
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
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
        // Old second homepage -> real homepage
        source: '/home',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/university-details/osmu',
        destination: '/university-details/1',
        permanent: true,
      },

      {
        source: '/verify-advisor',
        destination: '/advisor',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
