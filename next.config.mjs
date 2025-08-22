// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    // === START OF THE FIX ===
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'thewowstyle.com',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
            // You can add more patterns here for other image sources
            // For example, to allow images from unsplash:
            // {
            //     protocol: 'https',
            //     hostname: 'images.unsplash.com',
            // }
        ],
    },
    // === END OF THE FIX ===
};

export default nextConfig;