/** @type {import('next').NextConfig} */
const nextConfig = {
    // This is the compiler configuration I suggested to fix the Webpack error.
    compiler: {
      styledComponents: true,
    },
  
    // This is your existing configuration for images, which I've kept.
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'thewowstyle.com',
          port: '',
          pathname: '/wp-content/uploads/**',
        },
        // You can add more patterns here for other image sources
      ],
    },
  };
  
  export default nextConfig;
  