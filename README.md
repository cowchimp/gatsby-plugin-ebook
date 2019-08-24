![node](https://img.shields.io/node/v/gatsby-plugin-ebook.svg)
[![npm](https://img.shields.io/npm/v/gatsby-plugin-ebook.svg)](https://www.npmjs.com/package/gatsby-plugin-ebook)

# gatsby-plugin-ebook

A [Gatsby.js](https://www.gatsbyjs.org) plugin that creates an e-book from your all your posts whenever you build your site.

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

## Runnning tests

Run tests with `npm test`.

## License

MIT
