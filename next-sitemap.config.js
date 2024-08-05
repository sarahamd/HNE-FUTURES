/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://hnefutures.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/api" },
      { userAgent: "*", allow: "/" },
    ],
  },
};
