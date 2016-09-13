var path = require('path');

// my-project/build/loaders/foo-loader.js
module.exports = function (source) {
  const filePath = process.argv[2];
  if (!filePath) {
    throw new Error('you need to define a path to the component that you want to mount');
  }

  // do foo
  //this.addDependency(filePath);
  const fileReg = /<<<moduleFileName>>>/gi;
  const moduleReg = /<<<moduleName>>>/gi;
  (source.match(fileReg).forEach(path => {
    this.addDependency(path);
  });

  console.log('source', source.replace(fileReg, path.join(process.cwd(), filePath)));
  var headerPath = path.resolve("header.js");
  return source.replace(fileReg, path.join(process.cwd(), filePath));
}
