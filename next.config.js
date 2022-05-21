/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PORT_JSON: '3306'
  }
}

module.exports = nextConfig
