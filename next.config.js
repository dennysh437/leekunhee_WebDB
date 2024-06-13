/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    unoptimized: true,
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://Leegunhee_test_leesy.ac.kr/"
      : "",
};