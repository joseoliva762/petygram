const path = require('path');

const getWebpackAlias = (jsConfig) => {
  const base = jsConfig.compilerOptions.baseUrl;
  const paths = jsConfig.compilerOptions.paths;

  return base && paths
    ? Object.keys(paths).reduce((currentAlias, pathKey) => {
        const [aliasKey] = pathKey.split('/');
        const [pathToConfig] = paths[pathKey];
        const [relativePath] = pathToConfig.split('/*');
        const absolutePath = path.join(__dirname, base, relativePath);
        return {
          ...currentAlias,
          [aliasKey]: absolutePath
        };
      }, {}) || {}
    : {};
};

module.exports = { getWebpackAlias };
