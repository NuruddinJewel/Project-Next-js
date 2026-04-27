// /** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      //All allow
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },



      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com',
      //   port: '',
      //   pathname: '/**',
      // },

      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com',
      //   port: '',
      //   pathname: '/**',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },
};

export default nextConfig;
