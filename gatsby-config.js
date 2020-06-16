require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  pathPrefix: `/engineering`,
  siteMetadata: {
    siteTitle: `Engineering at Vernacular.ai`,
    siteTitleAlt: `Engineering | Vernacular.ai`,
    siteHeadline: `Engineering | Vernacular.ai`,
    siteUrl: `https://vernacular-ai.github.io/ml`,
    siteDescription: `Notes from the Engineering team at Vernacular.ai`,
    siteImage: ``,
    author: ``,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        feed: true,
        feedTitle: `Engineering at Vernacular.ai`,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Team`,
            slug: `/team`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/vernacularai`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Engineering at Vernacular.ai`,
        short_name: `Engineering`,
        description: `Notes from the Engineering team at Vernacular.ai`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
};
