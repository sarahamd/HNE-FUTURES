/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/qr/charger/:code",
        destination: "/app",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
