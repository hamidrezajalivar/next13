/** @type {import('next').NextConfig} */
const path = require("path");
module.exports = {
  publicDirectory: 'public',
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["via.placeholder.com"],
  },
  server: {
    https: {
      rejectUnauthorized: false,
    },
  },
};
