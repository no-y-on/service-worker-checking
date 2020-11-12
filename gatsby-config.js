require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby E-Commerce Starter`,
    description: `Accept payments in your Gatsby site using Stripe Checkout.`,
    author: `@thorwebdev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Price'],
        secretKey: 'sk_test_51HmFCPEB29tb8AM0d1v8XrhBzUAhISokxQRO9bwrcwHwF12QkjHD120SBMatGL2DI1zPZVdiRW7rVQsX4jzh0tKC00hq5wymD4',
        downloadFiles: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/e-com.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // Overriding the workbox config with gatsby offline plugin to change the runtime caching policies to use NetworkFirst appropriately
      {
          resolve: `gatsby-plugin-offline`,
          options: {
              workboxConfig: {
                  runtimeCaching: [
                      {
                          urlPattern: /(\.js$|\.css$|static\/)/,
                          handler: `CacheFirst`,
                      },
                      {
                          urlPattern: /^https?:.*\/page-data\/.*\/(page-data|app-data)\.json$/,
                          handler: `NetworkFirst`,
                          options: {
                              networkTimeoutSeconds: 1,
                          },
                      },
                      {
                          urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
                          handler: `StaleWhileRevalidate`,
                      },
                      {
                          urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
                          handler: `StaleWhileRevalidate`,
                      },
                      {
                          urlPattern: /\/$/,
                          handler: `NetworkFirst`,
                          options: {
                              networkTimeoutSeconds: 1,
                          },
                      },
                  ],
              },
          },
      },
  ],
}
