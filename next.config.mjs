/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/navy-body-fat-calculator",
        destination: "/body-fat-calculator",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
