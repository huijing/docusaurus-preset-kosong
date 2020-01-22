const path = require('path');

module.exports = function preset(context, opts = {}) {
  const {siteConfig = {}} = context;
  const {themeConfig} = siteConfig;
  const {algolia, googleAnalytics, gtag} = themeConfig;

  const isProd = process.env.NODE_ENV === 'production';
  return {
    themes: [
      [path.resolve(__dirname, '/Users/huijing/Sites/docusaurus-theme-kosong'), opts.theme],
    ],
    plugins: [
      ['@docusaurus/plugin-content-docs', opts.docs],
      ['@docusaurus/plugin-content-blog', opts.blog],
      ['@docusaurus/plugin-content-pages', opts.pages],
      isProd && googleAnalytics && '@docusaurus/plugin-google-analytics',
      isProd && gtag && '@docusaurus/plugin-google-gtag',
      isProd && ['@docusaurus/plugin-sitemap', opts.sitemap],
    ],
  };
};
