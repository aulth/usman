/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    key:process.env.key,
    email:process.env.email
  }
}

module.exports = nextConfig
