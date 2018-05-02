module.exports = {
  siteMetadata: {
    title: 'Data Peace | We engineer your data journey',
    meta: [
      {
        name: 'description',
        content:
                  'We are focused on bringing the promise of the CLOUD and AI to all' +
                  ' enterprises- sizes no bar! We work with our clients to create solutions that are optimal,' +
                  ' sustainable and economical. We are adept at working with all varieties, velocities and' +
                  ' volumes of data- an answer to evolving realties of modern day businesses. We have partnered ' +
                  'with leading CLOUD ecosystems to craft successful CLOUD and data journeys for our clients. ',
      },
      {
        name: 'keywords',
        content:
                  'Computer Vision, Deep Learning, Machine Learning, Big Data, Analytics, Data Lake' +
                  ', AWS, GCP, AZURE',
      },
    ],
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-glamor',
    // {
    //   resolve: 'gatsby-plugin-typography',
    //   options: {
    //     pathToConfigModule: 'src/utils/typography',
    //   },
    // },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-component',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_ID,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Data Peace',
        short_name: 'Data Peace',
        start_url: '/',
        background_color: '#f7f7f7',
        theme_color: '#00c8c2',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-sitemap',
  ],
};
