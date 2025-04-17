/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        unoptimized: true,
    },
    async rewrites() {
        return [
            {
                source: "/",
                destination: "/en",
            }
        ];
    },
};

export default nextConfig;
