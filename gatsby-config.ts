import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Domače skrivnosti`,
    siteUrl: `https://zvan.github.io`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap",
    //  {
    // resolve: 'gatsby-plugin-manifest',
    // options: {
    //   // "icon": "src/images/icon.png"
    // }
    // }, 
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp",
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     "name": "images",
    //     "path": "./src/images/"
    //   },
    //   __key: "images"
    // },
   {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "recepti",
      "path": './recepti'
    },
    __key: "recepti"
  }]
};

export default config;
