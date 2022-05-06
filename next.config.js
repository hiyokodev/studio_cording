/** @type {import('next').NextConfig} */

// GitHub Pages用の設定
const urlPrefix = process.env.URL_PREFIX ? "/" + process.env.URL_PREFIX : "";

const nextConfig = {
  env: {
    DIR: process.env.NODE_ENV == "production" ? "/studio_cording" : "",
  },
  reactStrictMode: true,
  assetPrefix: urlPrefix, // GitHub Pages用の設定
  basePath: urlPrefix, // GitHub Pages用の設定
  trailingSlash: true, // GitHub Pages用の設定
};

module.exports = nextConfig;