const path = require('path');
const { defaultOptions } = require('./defaults');
const { generateEbook } = require('./generateEbook');

exports.onPostBuild = async ({ graphql }, pluginOptions) => {
  const options = {
    ...defaultOptions,
    ...pluginOptions,
  };

  const result = await runQuery(graphql, options.query);

  await generateEbook(result, path.join(options.publicDir, options.filename));
};

function runQuery(handler, query) {
  return handler(query).then(r => {
    if (r.errors) {
      throw new Error(r.errors.join(`, `));
    }

    return r.data;
  });
}
