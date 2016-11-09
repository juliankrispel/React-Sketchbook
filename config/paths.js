var path = require('path');
var findParentDir = require('find-parent-dir');

if (!global.moduleFilePath) {
  throw new Error('you need to define a path to the component that you want to mount');
}

var dynamicNodeModulesFolder = findParentDir(path.dirname(global.moduleFilePath), 'node_modules', () => {
  console.log('no node_modules found in directory');
});

// We support resolving modules according to `NODE_PATH`.
// This lets you use absolute paths in imports inside large monorepos:
// https://github.com/facebookincubator/create-react-app/issues/253.

// It works similar to `NODE_PATH` in Node itself:
// https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders

// We will export `nodePaths` as an array of absolute paths.
// It will then be used by Webpack configs.
// Jest doesn’t need this because it already handles `NODE_PATH` out of the box.

var nodePaths = (process.env.NODE_PATH || '')
  .split(process.platform === 'win32' ? ';' : ':')
  .filter(Boolean)
  .map(p => path.resolve(p));

const resolveApp = (relativePath) => !relativePath ? relativePath : path.resolve(relativePath);
var dynamicFolder = resolveApp(dynamicNodeModulesFolder);
dynamicFolder = dynamicFolder ? [dynamicFolder] : [];

const resolveInternal = (relativePath) => path.resolve(__dirname, '../' + relativePath);

// config after eject: we're in ./config/
module.exports = {
  appBuild: resolveInternal('build'),
  appHtml: resolveInternal('index.html'),
  appPackageJson: resolveInternal('package.json'),
  appSrc: resolveInternal('src'),
  moduleSrc: 
    [resolveInternal('src')]
    .concat(global.extraNodePaths || [])
    .concat([path.resolve(path.dirname(global.moduleFilePath))]),
  testsSetup: resolveApp('src/setupTests.js'),
  appNodeModules: resolveInternal('node_modules'),
  ownNodeModules: resolveInternal('node_modules'),
  nodePaths: nodePaths.concat(global.extraNodePaths || []).concat([resolveApp('node_modules')]).concat(dynamicFolder)
};
