![node](https://img.shields.io/node/v/gatsby-plugin-ebook.svg)
[![npm](https://img.shields.io/npm/v/gatsby-plugin-ebook.svg)](https://www.npmjs.com/package/gatsby-plugin-ebook)

# gatsby-plugin-ebook 📖

A [Gatsby.js](https://www.gatsbyjs.org) plugin that creates an e-book from your all your posts whenever you build your site.

## Motivation

If your blog contains a lot of long posts, you can use this plugin to offer your content to your readers in a way that's comfortable to read, especially in cases where there is no network connectivity :airplane: 🏝️

## Getting started

Install the plugin by running the following command in your Gatsby site's root directory:

```
npm install gatsby-plugin-ebook
```

Add `'gatsby-plugin-ebook'` to the `plugins` array in `gatsby-config.js`:

```diff
  plugins: [
    'gatsby-plugin-feed',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
+   'gatsby-plugin-ebook', 
  ]
```

Next time you build your site with the `build` command, an epub e-book will be generated in your `public` folder.

## Customizing

By switching to the notation that lets you pass an `options` object you can customize how your e-book is created.

```diff
  plugins: [
    'gatsby-plugin-react-helmet',
-   'gatsby-plugin-ebook',
+   {
+     resolve: 'gatsby-plugin-ebook',
+     options: {
+       // custom options go here
+     }
+   }
  ]
```

The `options` object you pass is merged with the default options object, so you can (and should) only override the properties you want to customize.  
Also, you can refer to the [source code](defaults.js) of the default options to use as a starting-off point.

Here are the currently available options:

#### `query`

As is customary in the Gatsby ecosystem, [graphql](https://www.gatsbyjs.org/docs/graphql) is used to fetch the posts in your site. You can copy the [default query](defaults.js) and adapt it to suit your needs (e.g. only use posts written in English to compose the e-book).

```diff
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-ebook',
    {
      resolve: 'gatsby-plugin-ebook',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                author
              }
            }
            allMarkdownRemark(
              sort: { fields: frontmatter___date, order: ASC },
+             filter: { fields: { langKey: { eq: "en" } } }
            ) {
              edges {
                node {
                  id
                  fileAbsolutePath
                  rawMarkdownBody
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }
          }
        `,
      }
    }
  ]
```

#### `filename`

Lets you set the name of the generated epub file.

```diff
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-ebook',
    {
      resolve: 'gatsby-plugin-ebook',
      options: {
+       filename: 'my-ebook.epub',
      }
    }
  ]
```

#### `publicDir`

Lets you set the directory where the ebook will be created.  
Typically this is the local `public` directory (the same directory where all Gatsby content will be created).

 ```diff
   plugins: [
     'gatsby-plugin-react-helmet',
     'gatsby-plugin-ebook',
     {
       resolve: 'gatsby-plugin-ebook',
       options: {
 +       publicDir: './my-generated-site',
       }
     }
   ]
 ```

## Running tests

Run tests with `npm test`.

## License

MIT
