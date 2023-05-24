const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{ 
    remotePatterns: [{
    hostname:"res.cloudinary.com",
    protocol:"https"
      }
  ]}
}

module.exports = nextConfig

const withVideos = require('next-videos')
module.exports = withVideos()
