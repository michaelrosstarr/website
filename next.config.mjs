/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    agentUpgrade: "security",
  },
}

export default nextConfig
