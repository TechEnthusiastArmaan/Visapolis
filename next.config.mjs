/** @type {import('next').NextConfig} */
const nextConfig = {
    // This is the compiler configuration I suggested to fix the Webpack error.
    compiler: {
      styledComponents: true,
    },
  experimental: {
        serverActions: {
            bodySizeLimit: '10mb', // You can adjust this value, e.g., '5mb', '20mb'
        },
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
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          // port and pathname are optional but good to keep
          port: '',
          pathname: '/**', // This allows any path from your Cloudinary account
        },
        // You can add more patterns here for other image sources
      ],
    },
  };
  
  export default nextConfig;
  