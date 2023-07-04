/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["via.placeholder.com"],
  },
  server: {
    https: {
      rejectUnauthorized: false,
    },
  },
};
