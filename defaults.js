exports.defaultOptions = {
  publicDir: './public',
  filename: `ebook.epub`,
  query: `{
  site {
    siteMetadata {
      title
      author
    }
  }
  allMarkdownRemark(
    sort: { fields: frontmatter___date, order: ASC }
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
}`,
};
