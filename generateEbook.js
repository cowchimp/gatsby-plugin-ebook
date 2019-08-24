const Epub = require('epub-gen');
const { toHtml } = require('./toHtml');
const path = require('path');

exports.generateEbook = async function(result, outputPath) {
  if (!result.allMarkdownRemark.edges.length) {
    return;
  }

  const epubOptions = {
    title: result.site.siteMetadata.title,
    author: result.site.siteMetadata.author,
    output: outputPath,
    content: result.allMarkdownRemark.edges.map(({ node }) => ({
      title: node.frontmatter.title,
      data: toHtml(node.rawMarkdownBody, path.dirname(node.fileAbsolutePath)),
    })),
  };

  await new Epub(epubOptions).promise;
};
