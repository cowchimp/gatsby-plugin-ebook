const { toHtml } = require('./toHtml');

test('should convert md to html', () => {
  const md = '# title';

  const result = toHtml(md, '/Users/me/code/my-site');

  expect(result.trim()).toEqual('<h1>title</h1>');
});

test('should convert code samples', () => {
  const md = `# title

\`\`\`jsx
console.log('Hello World!');
\`\`\`

`;

  const result = toHtml(md, '/Users/me/code/my-site');

  expect(result.trim()).toEqual(`<h1>title</h1>
<pre><code class="language-jsx">console.log('Hello World!');
</code></pre>`);
});

test('should convert image references to absolute local paths', () => {
  const md = `# title

![grumpy cat](./grumpy-cat.jpg)

`;

  const result = toHtml(md, '/Users/me/code/my-site');

  expect(result.trim()).toEqual(`<h1>title</h1>
<p><img src="/Users/me/code/my-site/grumpy-cat.jpg" alt="grumpy cat"></p>`);
});
