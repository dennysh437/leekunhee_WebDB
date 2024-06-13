/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    unoptimized: true,
  },
  // 이건 github에서 호스팅할때 쓰는거라 문제 생긴듯
  // assetPrefix:
  //   process.env.NODE_ENV === "production"
  //     ? "https://Leegunhee_test_leesy.ac.kr/"
  //     : "",
};