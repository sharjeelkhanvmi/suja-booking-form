/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/payment',
        destination: 'https://app.sujadrivingschool.co.uk/api/payment',
      },
    ];
  },
};

module.exports = nextConfig;
