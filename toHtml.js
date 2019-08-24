const unified = require('unified');
const markdown = require('remark-parse');
const html = require('remark-html');
const visit = require('unist-util-visit');
const path = require('path');

const processor = unified()
  .use(markdown, {
    commonmark: true,
  })
  .use(html);

exports.toHtml = function(markdown, rootDirname) {
  const tree = processor.parse(markdown);
  addAbsoluteImages(tree, rootDirname);
  return processor.stringify(tree);
};

function addAbsoluteImages(tree, rootDirname) {
  visit(tree, 'image', function(node) {
    if (!path.isAbsolute(node.url)) {
      node.url = path.resolve(rootDirname, node.url);
    }
  });
}
