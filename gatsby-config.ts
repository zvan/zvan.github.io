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
    "gatsby-plugin-mdx", 
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
  }, {
      resolve: 'gatsby-plugin-local-search',
      options: {
       
        name: 'recipes',

        // flexsearch, lunr
        engine: 'flexsearch',
        engineOptions: 'speed',

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          {
            allMdx {
              nodes {
                frontmatter {
                  title
                  slug
                  ingredients
                  source
                  tags
                }
                body
                id
              }
            }
          }
        `,
        ref: 'id',
        index: ['title', 'body', 'ingredients', 'source', 'tags'],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ['id', 'slug', 'title', 'ingredients'],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allMdx.nodes.map((node) => ({
            id: node.id,
            body: node.body,
            slug: node.frontmatter.slug,
            title: node.frontmatter.title,
            ingredients: node.frontmatter.ingredients,
            source: node.frontmatter.source,
            tags: node.frontmatter.tags,
          })),
      },
  }]
};

export default config;
