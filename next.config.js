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
            },
            {
                protocol: 'https',
                hostname: 'acdn.sloththe.dev',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'spotify-github-profile.kittinanx.com',
                pathname: '/**'
            }
        ]
    }
}

module.exports = nextConfig
