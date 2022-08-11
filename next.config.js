const path = require("path");

/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "www.androidfreeware.net",
      "icon-library.com",
      "aux.iconspalace.com",
      "www.maxpixel.net",
    ],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "config.scss";`,
  },
  compiler: {
    styledComponents: true,
  },
};
