module.exports = {
  siteMetadata: {
    title: 'New Amsterdam Bakery'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-121847457-1',
        head: true,
        anonymize: true,
        respectDNT: true,
        exclude: ['/success/', '/404/']
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: `${__dirname}/src/layouts/index.jsx`
      }
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'media'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2000,
              sizeByPixelDensity: true,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent'
            }
          }
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'orange',
        minimum: 0.3,
        showSpinner: true
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'New Amsterdam Bakery',
        short_name: 'newamsterdam',
        start_url: '/',
        background_color: '#FEFEFE',
        theme_color: '#FFEFD5',
        display: 'minimal-ui',
        icon: `${__dirname}/src/img/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
};
