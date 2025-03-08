const sass = require('sass');
const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Devin Cooley Portfolio`,
    description: `Portfolio site for Devin Cooley`,
    author: `@devincooley`,
  },
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
    `gatsby-plugin-offline`,
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
  ],
};
