// my-project/build/loaders/foo-loader.js
var utils = require('loader-utils'),
    debug = require('debug')('loader/foo');

module.exports = function (source) {
  // do foo
 debug('start injection loader', source.length);
 var config = loaderUtils.getLoaderConfig(this, 'foo');
 debug('isBaz', config.bar === 'baz');
 debug('isQoo', config.qux === 'qoo');
 return source;
}
