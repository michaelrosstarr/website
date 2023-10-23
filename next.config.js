/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'skillicons.dev',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 's3.us-west-2.amazonaws.com',
                pathname: '/**',
            }
        ]
    }
}

module.exports = nextConfig
