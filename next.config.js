/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: "f8bo36asfyb1",
    CONTENTFUL_ENVIROMENT: "master"
  }
}

module.exports = nextConfig;
