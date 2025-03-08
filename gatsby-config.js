// TODO: There's a deprecation warning for Sass's legacy JS API that will be removed in Dart Sass 2.0.0
// We'll need to update to the new API in the future: https://sass-lang.com/d/legacy-js-api
const sass = require('sass');
const path = require('path');

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Devin Cooley Portfolio`,
    description: `Portfolio site for Devin Cooley`,
    author: `@devincooley`,
    siteUrl: `https://devincooley.com`,
  },
  flags: {},
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src/files/`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: sass,
        sassOptions: {
          includePaths: [path.join(__dirname, 'src/style')],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Devin Cooley Portfolio`,
        short_name: `DC Portfolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
    // Let's try re-enabling the offline plugin
    `gatsby-plugin-offline`,
  ],
};
