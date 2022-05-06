/** @type {import('next').NextConfig} */

// GitHub Pages用の設定
const urlPrefix = process.env.URL_PREFIX ? "/" + process.env.URL_PREFIX : "";

module.exports = {
  env: {
    DIR: process.env.NODE_ENV == "production" ? "/studio_cording" : "",
  },
  nextConfig: {
    reactStrictMode: true,
    assetPrefix: urlPrefix, // GitHub Pages用の設定
    basePath: urlPrefix, // GitHub Pages用の設定
    trailingSlash: true, // GitHub Pages用の設定
  },
};